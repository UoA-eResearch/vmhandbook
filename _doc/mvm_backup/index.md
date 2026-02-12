---
title:  "Backup:  Copy Files from Virtual Machine to Research Drive"
categories: windows admin user howto
---


## Backup files from VM

Research-drives and vms are backed up nightly by Connect, and you can restore files from backup yourself.



## Windows

1.  Map your research network-drive \\files.auckland.ac.nz\research\<your_research_drive>

2. Open the command prompt by searching for the string "cmd" in the search box.
In the cmd window, you have access to the robocopy command.

```code
   robocopy --help
```
will show you simple options.


3. To copy a folder on your D:\ drive or some subfolder there, to the corresponding location on your research drive:

```code
   robocopy D:\<folder>/ E:\<folder>
```
4. To mirror a folder on your D:\ drive or some subfolder there, to the corresponding location on your research drive:

```code
   robocopy D:\<folder> E:\<folder> /MIR
```
(mirroring produces a complete copy, deleting any files on the target that are no longer on the source.  Make sure this is what you intend if you use this command.

## Restore files from Research Drive to VM

```code
robocopy E:\<source> D:\<destination>
```

## Linux

At the command-line (in a terminal), the command rsync will copy or mirror a folder for you from your data drive to your research network-drive:

```code
 rsync -avz /data/<specific_directory>/  /mnt/<research_drive>/specific/directory/
```

## Restore files from Research Drive to VM
 rsync -avz  /mnt/<research_drive>/<source> /data/<destination>/
