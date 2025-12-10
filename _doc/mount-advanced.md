---
title:  "Advanced Mount information:  sharing a research drive, persistent mount of research drive"
categories: howto drive linux admin
---

# Contents
  - [Persistent Research Drive Mount](#persistent-research-drive-mount)
  - [Shared Research Drive Access](#shared-research-drive-access)

## Persistent Research Drive Mount

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
chmod 0600 ~/.cifs_credentials
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
//files.auckland.ac.nz/research/<research_drive_name>  /home/<your_username_on_the_vm>/<research_drive_mount_point>  cifs nofail,credentials=/home/<your_username_on_the_vm>/.cifs_credentials,uid=<your_uid>,gid=<your_gid>,users 0   0
```

Unmount the research drive in order to test the fstab configuration:

```bash
sudo mount -av
```
----

## Shared Research Drive Access
(Taken from [RedHat documentation](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html-single/managing_file_systems/index#proc_accessing-a-share-as-a-user_assembly_performing-a-multi-user-smb-mount))

One method of sharing a mount of a research drive is by having an admin user set up the mount with the multiuser option, mounting the drive, and then letting individual users authenticate with cifs using their credentials.

### Superuser setup

1. A superuser creates the folder /mnt/<research_drive_name>
with group owner the vm's rw(user) group name:

```bash
mkdir -p /mnt/<research_drive_name>
chown <user>:<vm_rw_group_name> /mnt/<research_drive_name>
```

2.This superuser then creates a secure credentials file for their access to the research drive:

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


3. With sudo permissions, edit the file `/etc/fstab` instructing that the research drive be mounted with these credentials, with the multiuser attribute:

```bash
//files.auckland.ac.nz/research/<research_drive_name>  /mnt/unifiles   cifs multiuser,sec=ntlmssp,credentials=/<some_directory_path>/.smb.cred,noauto  0 0
systemctl daemon-reload
```
4.  A superuser effectively mounts the drive under their username, supplying the credentials file to /etc/fstab.

### User access

Any user of the vm who has access to the research-drive (belongs to the appropriate vmuser group) then
provides their credentials for the research-drive server (`files.auckland.ac.nz`) to the kernel’s keyring with the command:

```bash
cifscreds add -u $USER files.auckland.ac.nz
```

They can then access the drive with their permissions in the directory /mnt/<research_drive_name>


