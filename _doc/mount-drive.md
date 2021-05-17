---
title:  "Mount network drives to Linux VMs"
categories: linux admin howto
---

Network drives include your Unifiles home folder, Unifiles research drives and other network file systems that start with `//machine_name`.
This tutorial will mount one of your research drives..

If you want to mount some other location, e.g. a faculty drive, you'll need to change the path according to your requirements.


### Prerequisites: Install cifs-utils and create mount directory [required once]

You need to have sudo privileges to mount network drives.

On Ubuntu VM, run:

```bash
sudo apt-get update
sudo apt-get install cifs-utils
```

On Red Hat VM, run:

```bash
sudo yum update
sudo yum install cifs-utils
```


## Mount a research drive

Below is a script you can use to mount a research drive (should you have one). 

Make sure you adjust the name of your drive in the variable `drive_name` at the beginning of the script to your needs.

```bash
#!/bin/bash

drive_name="rescer201800002-cer-researchfolder-test"
share="//files.auckland.ac.nz/research/${drive_name}"

# unifiles doesn't work with smb versions earlier than 2.1, and smb version 2.1 has some issues with caja file manager
# we therefore specify smb version 3.0, introduced with Windows 8 / Windows Server 2012
smb_version="3.0"

mountpoint="${HOME}/${drive_name}"
common_options="iocharset=utf8,workgroup=uoa,uid=${USER},dir_mode=0700,file_mode=0700,nodev,nosuid,vers=${smb_version}"
options="username=${USER},${common_options}"

mkdir -p ${mountpoint}
sudo mount -t cifs "${share}" "${mountpoint}" -o "${options}"
if [ "$?" -gt "0" ]; then
  rmdir ${mountpoint}
fi
```

If you save this code in the file `~/mount_drive.sh` and give it executable permissions via `chmod u+x ~/mount_drive.sh`, you can then run the script like this:
```bash
~/mount_drive.sh
```

## Unmount a network drive

```bash
sudo umount -l ${HOME}/rescer201800002-cer-researchfolder-test
```

Make sure you adjust `${HOME}/rescer201800002-cer-researchfolder-test` to the location you used when you mounted the research drive
