/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 */

import { execSync } from "child_process";
import fs from "fs";
import * as path from "path";
import { contains, npmInstall, npmPack, npmRunBuild, npmRunTest } from "./common";
import { Logger } from "./logger";
import { getPackageInformationFromPackageJsons, PackageInfo } from "./packages";
import { findReadmeTypeScriptMdFilePaths, getAbsolutePackageFolderPathFromReadmeFileContents, getPackageNamesFromReadmeTypeScriptMdFileContents } from "./readme";
import { NPMViewResult, NPMScope } from "@ts-common/azure-js-dev-tools";
import { Changelog, generateChangelogAndBumpVersion } from "js-sdk-changelog-tool";
import { getChangedPackageDirectory, getLastCommitId } from "./git";
const _logger = Logger.get();

function containsPackageName(packageNames: string[], packageName: string): boolean {
    const result = contains(packageNames, packageName) ||
        contains(packageNames, `@azure/${packageName}`) ||
        contains(packageNames, `"${packageName}"`) ||
        contains(packageNames, `"@azure/${packageName}"`) ||
        contains(packageNames, `'${packageName}'`) ||
        contains(packageNames, `'@azure/${packageName}'`);
    _logger.logTrace(`Comparing package name "${packageName}" to ${JSON.stringify(packageNames)} - Result: ${result}`);
    return result;
}

export async function generateSdk(azureRestAPISpecsRoot: string, azureSDKForJSRepoRoot: string, packageName: string, use?: string, useDebugger?: boolean) {
    const typeScriptReadmeFilePaths: string[] = findReadmeTypeScriptMdFilePaths(azureRestAPISpecsRoot);

    for (let i = 0; i < typeScriptReadmeFilePaths.length; ++i) {
        const typeScriptReadmeFilePath: string = typeScriptReadmeFilePaths[i];

        const typeScriptReadmeFileContents: string = await fs.promises.readFile(typeScriptReadmeFilePath, { encoding: 'utf8' });
        const packageNames: string[] = getPackageNamesFromReadmeTypeScriptMdFileContents(typeScriptReadmeFileContents);
        const packageNamesString: string = JSON.stringify(packageNames);

        if (!packageName || containsPackageName(packageNames, packageName)) {
            _logger.log(`>>>>>>>>>>>>>>>>>>> Start: "${packageNamesString}" >>>>>>>>>>>>>>>>>>>>>>>>>`);

            const readmeFilePath: string = path.resolve(path.dirname(typeScriptReadmeFilePath), 'readme.md');

            let cmd = `autorest --typescript --typescript-sdks-folder=${azureSDKForJSRepoRoot} --license-header=MICROSOFT_MIT_NO_VERSION ${readmeFilePath}`;
            if (use) {
                cmd += ` --use=${use}`;
            }
            else {
                const localAutorestTypeScriptFolderPath = path.resolve(azureSDKForJSRepoRoot, '..', 'autorest.typescript');
                if (fs.existsSync(localAutorestTypeScriptFolderPath) && fs.lstatSync(localAutorestTypeScriptFolderPath).isDirectory()) {
                    cmd += ` --use=${localAutorestTypeScriptFolderPath}`;
                }
            }

            if (useDebugger) {
                cmd += ` --typescript.debugger`;
            }

            try {
                _logger.log('Executing command:');
                _logger.log('------------------------------------------------------------');
                _logger.log(cmd);
                _logger.log('------------------------------------------------------------');

                const commandOutput = execSync(cmd, { encoding: "utf8" });
                _logger.log(commandOutput);

                _logger.log('Installing dependencies...');
                const packageFolderPath: string | undefined = getAbsolutePackageFolderPathFromReadmeFileContents(azureSDKForJSRepoRoot, typeScriptReadmeFileContents);
                if (!packageFolderPath) {
                    _logger.log('Error:');
                    _logger.log(`Could not determine the generated package folder's path from ${typeScriptReadmeFilePath}.`);
                } else {
                    await npmInstall(packageFolderPath);
                    await npmRunTest(packageFolderPath);
                }
            } catch (err) {
                _logger.log('Error:');
                _logger.log(`An error occurred while generating client for packages: "${packageNamesString}":\nErr: ${err}\nStderr: "${err.stderr}"`);
            }

            _logger.log(`>>>>>>>>>>>>>>>>>>> End: "${packageNamesString}" >>>>>>>>>>>>>>>>>>>>>>>>>`);
            _logger.log();
        }
    }
}

interface OutputPackageInfo {
    packageName: string;
    path: string[];
    readmeMd: string[];
    changelog: {
        content: string;
        hasBreakingChange: boolean;
    };
    artifacts: string[];
    result: string;
}

export async function automationGenerateInPipeline(azureSDKForJSRepoRoot: string, inputJsonPath: string, outputJsonPath: string, use?: string, useDebugger?: boolean) {
    const inputJson = JSON.parse(fs.readFileSync(inputJsonPath, {encoding: 'utf-8'}));
    const specFolder: string = inputJson['specFolder'];
    const readmeFiles: string[] = inputJson['relatedReadmeMdFiles'];
    const gitCommitId: string = inputJson['headSha'];
    const repoHttpsUrl: string = inputJson['repoHttpsUrl'];
    const packages: OutputPackageInfo[] = [];
    const outputJson = {
        packages: packages
    };
    for (const readmeMd of readmeFiles) {
        await generateSdkAutomatically(azureSDKForJSRepoRoot, path.join(specFolder, readmeMd), readmeMd, gitCommitId, undefined, use, useDebugger, outputJson, repoHttpsUrl);
    }

    fs.writeFileSync(outputJsonPath, JSON.stringify(outputJson, undefined, '  '), {encoding: 'utf-8'})
}

export async function automationGenerateInLocal(azureSDKForJSRepoRoot: string, absoluteReadmeMd: string, tag?: string, use?: string, useDebugger?: boolean) {
    const regexResult = /^(.*\/azure-rest-api-specs)\/(specification.*)/.exec(absoluteReadmeMd);
    if (!regexResult || regexResult.length !== 3) {
        _logger.logError(`Cannot Parse readme file path: ${absoluteReadmeMd}`);
    } else {
        const gitCommitId = await getLastCommitId(regexResult[1]);
        const relativeReadmeMd = regexResult[2];
        await generateSdkAutomatically(azureSDKForJSRepoRoot, absoluteReadmeMd, relativeReadmeMd, gitCommitId, tag, use, useDebugger);
    }
}

export async function generateSdkAutomatically(azureSDKForJSRepoRoot: string, absoluteReadmeMd: string, relativeReadmeMd: string, gitCommitId: string, tag?: string, use?: string, useDebugger?: boolean, outputJson?: any, swaggerRepoUrl?: string) {
    _logger.log(`>>>>>>>>>>>>>>>>>>> Start: "${absoluteReadmeMd}" >>>>>>>>>>>>>>>>>>>>>>>>>`);

    let cmd = `autorest --version=V2 --typescript --typescript-sdks-folder=${azureSDKForJSRepoRoot} --license-header=MICROSOFT_MIT_NO_VERSION ${absoluteReadmeMd}`;

    if (tag) {
        cmd += ` --tag=${tag}`;
    }

    if (use) {
        cmd += ` --use=${use}`;
    } else {
        const localAutorestTypeScriptFolderPath = path.resolve(azureSDKForJSRepoRoot, '..', 'autorest.typescript');
        if (fs.existsSync(localAutorestTypeScriptFolderPath) && fs.lstatSync(localAutorestTypeScriptFolderPath).isDirectory()) {
            cmd += ` --use=${localAutorestTypeScriptFolderPath}`;
        }
    }

    if (useDebugger) {
        cmd += ` --typescript.debugger`;
    }

    try {
        _logger.log('Executing command:');
        _logger.log('------------------------------------------------------------');
        _logger.log(cmd);
        _logger.log('------------------------------------------------------------');

        const commandOutput = execSync(cmd, { encoding: "utf8" });
        _logger.log(commandOutput);

        const changedPackageDirectories: Set<string> = await getChangedPackageDirectory();
        for (const changedPackageDirectory of changedPackageDirectories) {
            const outputPackageInfo: OutputPackageInfo = {
                "packageName": "",
                "path": [],
                "readmeMd": [
                    relativeReadmeMd
                ],
                "changelog": {
                    "content": "",
                    "hasBreakingChange": false
                },
                "artifacts": [],
                "result": "succeeded"
            };
            try {
                const packageFolderPath: string = path.join(azureSDKForJSRepoRoot, changedPackageDirectory);
                _logger.log(`Installing dependencies for ${changedPackageDirectory}...`);
                if (packageFolderPath) {
                    await npmInstall(packageFolderPath);
                    await npmRunTest(packageFolderPath);
                    await npmRunBuild(packageFolderPath);
                    _logger.log('Generating Changelog and Bumping Version...');
                    const changelog: Changelog | undefined = await generateChangelogAndBumpVersion(changedPackageDirectory);
                    await npmPack(packageFolderPath);
                    if (outputJson) {
                        if (changelog) {
                            outputPackageInfo.changelog.hasBreakingChange = changelog.hasBreakingChange;
                            outputPackageInfo.changelog.content = changelog.displayChangeLog();
                        }
                        const packageJson = JSON.parse(fs.readFileSync(path.join(packageFolderPath, 'package.json'), { encoding: 'utf-8' }));
                        outputPackageInfo.packageName = packageJson.name;
                        outputPackageInfo.path.push(path.dirname(changedPackageDirectory));
                        for (const file of fs.readdirSync(packageFolderPath)) {
                            if (file.startsWith('azure-arm') && file.endsWith('.tgz')) {
                                outputPackageInfo.artifacts.push(path.join(changedPackageDirectory, file));
                            }
                        }
                    }
                    const metaInfo: any = {
                        commit: gitCommitId,
                        readme: relativeReadmeMd,
                        autorest_command: cmd,
                        repository_url: swaggerRepoUrl? `${swaggerRepoUrl}.git` : 'https://github.com/Azure/azure-rest-api-specs.git'
                    };
                    if (tag) {
                        metaInfo['tag'] = tag;
                    }
                    if (use) {
                        metaInfo['use'] = use;
                    }
                    fs.writeFileSync(path.join(packageFolderPath, '_meta.json'), JSON.stringify(metaInfo, undefined, '  '), {encoding: 'utf-8'});
                } else {
                    throw 'find undefined packageFolderPath'
                }
            } catch (e) {
                _logger.log('Error:');
                _logger.log(`An error occurred while generating client for readme file: "${absoluteReadmeMd}":\nErr: ${e}\nStderr: "${e.stderr}"`);
                outputPackageInfo.result = 'failed';
            } finally {
                if (outputJson) {
                    outputJson.packages.push(outputPackageInfo);
                }
            }
        }
    } catch (err) {
        _logger.log('Error:');
        _logger.log(`An error occurred while generating client for readme file: "${absoluteReadmeMd}":\nErr: ${err}\nStderr: "${err.stderr}"`);
    }

    _logger.log(`>>>>>>>>>>>>>>>>>>> End: "${absoluteReadmeMd}" >>>>>>>>>>>>>>>>>>>>>>>>>`);
    _logger.log();
}

function getPackageConfig(azureSdkForJsRoot: string, packageInfo: PackageInfo, include?: RegExp, exclude?: RegExp): { content: any; path: string } | undefined {
    if (!include) {
        include = /.*/;
    }

    if (!packageInfo.name || (!packageInfo.name.match(include) || (exclude && packageInfo.name.match(exclude)))) {
        _logger.log(`Skipping ${packageInfo.name} package`);
        return undefined;
    }

    if (!packageInfo.outputPath) {
        throw new Error("Output path cannot be undefined");
    }

    const packageJsonPath = path.join(azureSdkForJsRoot, packageInfo.outputPath, "package.json");
    _logger.log(`Reading "${packageJsonPath}"`);
    const configContent = fs.readFileSync(packageJsonPath);
    const config = JSON.parse(configContent.toString());

    return { content: config, path: packageJsonPath };
}

export async function setAutoPublish(azureSdkForJsRoot: string, include?: RegExp, exclude?: RegExp) {
    const jsonPackageInfos = await getPackageInformationFromPackageJsons(azureSdkForJsRoot);

    for (const packageInfo of jsonPackageInfos) {
        _logger.log(`Analyzing ${packageInfo.name} package`);
        const config = getPackageConfig(azureSdkForJsRoot, packageInfo, include, exclude);
        if (!config) {
            _logger.log(`Skipping ${packageInfo.name} package`);
            continue;
        }

        config.content["autoPublish"] = true;
        fs.writeFileSync(config.path, JSON.stringify(config.content, undefined, "  ") + "\n");
        _logger.log("Saved");
    }
}

export async function setVersion(azureSdkForJsRoot: string, include?: RegExp, exclude?: RegExp) {
    if (!include) {
        include = /.*/;
    }

    const jsonPackageInfos = await getPackageInformationFromPackageJsons(azureSdkForJsRoot);

    for (const packageInfo of jsonPackageInfos) {
        _logger.log(`Analyzing ${packageInfo.name} package`);
        const config = getPackageConfig(azureSdkForJsRoot, packageInfo, include, exclude);
        if (!config) {
            _logger.log(`Skipping ${packageInfo.name} package`);
            continue;
        }

        const nodeName = packageInfo.name!.replace("@", "").replace("/", "-");
        const npm = new NPMScope({});
        const npmViewResult: NPMViewResult = npm.view({ packageName: nodeName });

        if (!npmViewResult.version) {
            continue;
        }

        config.content["version"] = npmViewResult.version!.replace("-preview", "");
        fs.writeFileSync(config.path, JSON.stringify(config.content, undefined, "  ") + "\n");
        _logger.log("Saved");
    }
}
