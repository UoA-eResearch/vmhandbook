---
title:  "Mount network drives to Linux VMs"
categories: vmware linux admin howto
permalink: /compute/linux/researchdrive/
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

## Persistent mount

System maintenance on the vm will cause it to occasionally reboot.
This section outlines how to ensure the drive is automatically remounted after reboot.

### set up a credentials file 

Create a file in your home-directory of the vm named (e.g.) `.cifs_credentials`,
and edit it to contain the lines

```
username=<your_UOA_username>
password=<your_UOA_password> 
domain=UOA
```

Now protect that file by changing its permissions to give you, and no-one else,  read-only access:
```bash
chmod 0400 ~/.cifs_credentials 
```

### Gather auxilliary information

Find your user identity on the vm with the command

```bash
id
```

and observe the values of your *uid* and *gid* (user-id and group-id).

We assume you mount the drive on your home directory as above, e.g. `~/<research_drive_mount_point>`.

### edit /etc/fstab with sudo

Using sudo, edit the file `/etc/fstab` and append the following line to it, substituting your values:

```
//files.auckland.ac.nz/research/<research_drive_name>  /home/<your_username_on_the_vm>/<research_drive_mount_point>  cifs credentials=/home/<your_username_on_the_vm>/.cifs_credentials,uid=<your_uid>,gid=<your_gid>,users 0   0
```

Unmount the research drive in order to test the fstab configuration:
```bash
sudo mount -av
```
