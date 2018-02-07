---
title:  "Mount network drives to Linux VMs"
categories: linux admin howto
---

Network drives include Unifiles, research drive and other network file systems that start with `//machine_name`. This tutorial will mount network folder `//files.auckland.ac.nz/ResFolder` to VM's `~/ResFolder`. You may need to change the paths according to your own requirements.

## Install cifs-utils and create mount directory [required once]

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

Create a local directory to be mounted to

```bash
mkdir -p /home/${USER}/ResFolder
```


## Mount a network drive

```bash
share="//files.auckland.ac.nz/ResFolder"
mountpoint="/home/${USER}/ResFolder"
common_options="iocharset=utf8,workgroup=uoa,uid=${USER},dir_mode=0700,file_mode=0700,nodev,nosuid,vers=2.1"
options="username=${USER},${common_options}"
sudo mount -t cifs "${share}" "${mountpoint}" -o "${options}"
```

## Unmount a network drive

```bash
mountpoint="/home/${USER}/ResFolder"
sudo umount -l ${mountpoint}
```
