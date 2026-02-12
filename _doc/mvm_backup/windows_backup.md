---
title:  "Backup data on your Windows Virtual Machine to your Research Drive"
categories: windows admin user howto
---


## Windows

1.  Map your research network-drive `\\files.auckland.ac.nz\research\<your_research_drive>`

2. Open the command prompt by searching for the string `cmd` in the search box.
In the cmd window, you have access to the robocopy command.

```code
   robocopy --help
```
will show you simple options.

![robocopy help]({{ "/assets" | append: page.id | append: "/robocopy_help.png" | absolute_url }}){:width="70%"}

3. To copy a folder on your `D:` drive or some subfolder there, to the corresponding location on your research drive:

```code
   robocopy D:\<folder>\ E:\<folder>
```
4. To mirror a folder on your `D:` drive or some subfolder there, to the corresponding location on your research drive:

```code
   robocopy D:\<folder> E:\<folder> /MIR
```
(mirroring produces a complete copy of the source on the target, 
deleting any files on the target that are no longer on the source.  Make sure this is what you intend if you use this command.

## Restore files from Research Drive to VM

```code
   robocopy E:\<source> D:\<destination>
```

