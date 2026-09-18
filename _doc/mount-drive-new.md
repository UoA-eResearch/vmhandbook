---
title:  "NEW Mount research drives to Linux VMs"
categories: linux admin howto drive
---

You need to have sudo privileges to mount network drives.

# Contents

* TOC
{:toc}

## Install cifs-utils and create the mount directory

On an Ubuntu VM, run:

```bash
sudo apt-get update
sudo apt-get install cifs-utils
```

On a Red Hat VM, run:

```bash
sudo yum update
sudo yum install cifs-utils
```

## Mount a research drive

Adjust the `drive_name` in the script below to mount a research drive.

```bash
#!/bin/bash

drive_name="rescer201800002-cer-researchfolder-test"
share="//researchdrive.auckland.ac.nz/${drive_name}"

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

## Unmount a research drive

```bash
sudo umount -l ${HOME}/rescer201800002-cer-researchfolder-test
```

Adjust the target of this command (`${HOME}/rescer201800002-cer-researchfolder-test`) to the location you used when you mounted your research drive.

## Symbolic links within a research-drive

If you want to create symbolic links within the research drive, add the option `mfsymlinks` to the list you provide in your mount command (continuing from the code above):

```bash
options="username=${USER},${common_options},mfsymlinks"
```

## Persistent Research Drive Mount

System maintenance on the vm will cause it to occasionally reboot. To ensure the drive is automatically remounted after reboot:

### 1. Set up a credentials file

Create a file in your home-directory named (e.g.) `.cifs_credentials`, and edit it to contain the lines:

```
username=<your_UOA_username>
password=<your_UOA_password>
domain=UOA
```

Protect that file by changing its permissions to give you, and no-one else,  read-only access:

```bash
chmod 0600 ~/.cifs_credentials
```

### 2. Gather auxilliary information

Find your user identity on the vm with the command

```bash
id
```

and observe the values of your *uid* and *gid* (user-id and group-id). 

### 3. Edit /etc/fstab with sudo

Using sudo, edit the file `/etc/fstab` and append the following line to it, substituting your values:

```
//researchdrive.auckland.ac.nz/<research_drive_name>  /home/<your_username_on_the_vm>/<research_drive_mount_point>  cifs nofail,credentials=/home/<your_username_on_the_vm>/.cifs_credentials,uid=<your_uid>,gid=<your_gid>,users 0   0
```

Unmount the research drive in order to test the fstab configuration:

```bash
sudo mount -av
```
----

## Sharing Research Drive Access

One method of sharing a mount of a research drive is by having an admin user set up the mount with the multiuser option, mounting the drive, and then letting individual users authenticate with cifs using their credentials.

### 1. Create the folder 

A superuser creates the folder /mnt/<research_drive_name>  with group owner as the vm's rw(user) group name:

```bash
mkdir -p /mnt/<research_drive_name>
chown <user>:<vm_rw_group_name> /mnt/<research_drive_name>
```

### 2. Create a credentials file 

This superuser then creates a secure credentials file for their access to the research drive:

E.g. create the file /<some_directory_path>/.smb.cred
to contain the details:

```code
user=<UOA_username>
password=<UOA_password>
domain=UOA
```

```bash
chmod 0600 /<some_directory_path>/.smb.cred
```

### 3. Add multiuser attribute 

With sudo permissions, edit the file `/etc/fstab` instructing that the research drive be mounted with these credentials, with the multiuser attribute:

```bash
//researchdrive.auckland.ac.nz/<research_drive_name>  /mnt/unifiles   cifs multiuser,sec=ntlmssp,credentials=/<some_directory_path>/.smb.cred,noauto  0 0
systemctl daemon-reload
```
### 4. Mount and access  

A superuser effectively mounts the drive under their username, supplying the credentials file to /etc/fstab.

Any user of the vm who has access to the research-drive (belongs to the appropriate vmuser group) then provides their credentials for the research-drive server (`researchdrive.auckland.ac.nz`) to the kernel’s keyring with the command:

```bash
cifscreds add -u $USER researchdrive.auckland.ac.nz
```

They can then access the drive with their permissions in the directory /mnt/<research_drive_name>.