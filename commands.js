module.exports = {
  DISK_INFO: {
    WINDOWS:
    "wmic logicaldisk get Caption,FreeSpace,Size,VolumeSerialNumber,Description  /format:list",
    UNIX: "df -P | awk 'NR > 1'",
  }
};
