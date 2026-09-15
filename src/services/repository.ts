import {
  getRepositoryFiles,
  getFileContent,
} from "./github.js";

const supportedExtensions = [
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".py",
  ".java",
  ".cpp",
  ".c",
];

const ignoredPaths = [
  "node_modules/",
  ".git/",
  "dist/",
  "build/",
];

const getSourceFiles = async (
  owner: string,
  repo: string,
  branch = "main"
) => {
  const tree = await getRepositoryFiles(
    owner,
    repo,
    branch
  );

  const files = tree.filter((item: any) => {
    if (item.type !== "blob") return false;

    const path = item.path.toLowerCase();

    if (ignoredPaths.some((ignored) => path.includes(ignored))) {
      return false;
    }

    return supportedExtensions.some((extension) =>
      path.endsWith(extension)
    );
  });

  const sourceFiles = await Promise.all(
    files.map(async (file: any) => {
      const content = await getFileContent(
        owner,
        repo,
        file.path,
        branch
      );

      return {
        path: file.path,
        content,
      };
    })
  );

  return sourceFiles;
};

export { getSourceFiles };