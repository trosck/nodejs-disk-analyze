const { execSync } = require("child_process");
const { DISK_INFO } = require("./commands");

async function main() {
  const windowsInfo = execSync(DISK_INFO.WINDOWS, { windowsHide: true });
  const infoArray = windowsInfo.toString().split("\r\r\n");

  const diskList = [];

  let currentDisk = null;
  for (const line of infoArray) {
    if (!line) {
      if (currentDisk) {
        diskList.push(currentDisk);
      }

      currentDisk = null;
      continue;
    }

    currentDisk ??= {};

    const [name, value] = line.split("=");
    currentDisk[name.toLowerCase()] = value;
  }
}

main();
