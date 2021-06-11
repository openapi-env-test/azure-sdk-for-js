import simpleGit, {SimpleGit} from 'simple-git';

const git: SimpleGit = simpleGit();

export async function getChangedPackageDirectory() {
  const changedPackageDirectories: Set<string> = new Set<string>();
  const gitStatus = await git.status();
  const files = gitStatus.files;
  for (const file of files) {
    const filePath = file.path;
    if (filePath.match(/sdk\/[^\/]*\/arm-.*/)) {
      const packageDirectory = /sdk\/[^\/]*\/arm-[^\/]*/.exec(filePath);
      if (packageDirectory) {
        changedPackageDirectories.add(packageDirectory[0]);
      }
    }
  }
  return changedPackageDirectories;
}
