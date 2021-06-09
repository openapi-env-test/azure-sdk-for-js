import { execSync } from "child_process";
import { Logger } from "./logger";
import { getAbsolutePackageFolderPathFromReadmeFileContents } from "./readme";
import { npmInstall, npmRunBuild, npmRunTest } from "./common";

const fs = require('fs');
const path = require('path');
const _logger = Logger.get();

async function main() {
  // const tempFile = process.argv.pop();
  const input = process.argv.pop();
  const inputObject = JSON.parse(fs.readFileSync(input));
  const specFolder: string = inputObject['specFolder'];
  const readmeFiles: string[] = inputObject['relatedReadmeMdFiles'];
  for (const readmeFile of readmeFiles) {
    const cmd = `autorest --typescript --use=@microsoft.azure/autorest.typescript@4.2.2 --typescript-sdks-folder=./ --license-header=MICROSOFT_MIT_NO_VERSION ${path.join(specFolder, readmeFile)}`;
    try {
      _logger.log('Executing command:');
      _logger.log('------------------------------------------------------------');
      _logger.log(cmd);
      _logger.log('------------------------------------------------------------');
      const commandOutput = execSync(cmd, { encoding: "utf8" });
      _logger.log(commandOutput);

      _logger.log('Installing dependencies...');
      const typeScriptReadmeFilePath = readmeFile.replace('readme.md', 'readme.typescript.md');
      const typeScriptReadmeFileContents: string = fs.readFileSync(typeScriptReadmeFilePath, { encoding: 'utf8' });
      const packageFolderPath: string | undefined = getAbsolutePackageFolderPathFromReadmeFileContents('./', typeScriptReadmeFileContents);
      if (!packageFolderPath) {
        _logger.log('Error:');
        _logger.log(`Could not determine the generated package folder's path from ${typeScriptReadmeFilePath}.`);
      } else {
        await npmInstall(packageFolderPath);
        await npmRunTest(packageFolderPath);
        await npmRunBuild(packageFolderPath);
        _logger.log('Generating Changelog and Bumping Version...');
        const relativePackageFolderPath: string = packageFolderPath.replace('./', '');
        const outputOfGeneratingChangelogAndBumpingVersion = execSync(`js-sdk-changelog-tool ${relativePackageFolderPath}`,{ encoding: "utf8" });
        console.log(outputOfGeneratingChangelogAndBumpingVersion);
      }

    } catch (err) {
      _logger.log('Error:');
      _logger.log(`An error occurred while generating client for readme file: "${readmeFile}":\nErr: ${err}\nStderr: "${err.stderr}"`);
    }
  }
}

main();
