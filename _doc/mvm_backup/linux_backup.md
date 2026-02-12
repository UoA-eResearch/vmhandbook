---
title:  "Backup data on your Linux Virtual Machine to your Research Drive"
categories: linux admin user howto
---


## Linux

At the command-line (in a terminal), the command rsync will copy or mirror a folder for you from your data drive to your research network-drive:

The general command is:
```code
 rsync -avz <source>  <target>  # general command
```

The specific command to backup a directory within your /data drive to a research drive mounted at `/mnt/<research_drive>` is

```code
 rsync -avz /data/<specific_directory>/  /mnt/<research_drive>/<specific_directory>/
```

The shell command
```code
   rsync --help
```
will show you many options.


## Restore files from Research Drive to VM

```code
   rsync -avz  /mnt/<research_drive>/<source> /data/<destination>/
```
where source might be a directory name or a specific file or set of files.
