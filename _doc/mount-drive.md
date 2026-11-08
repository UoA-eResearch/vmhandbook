---
title:  "Mount network drives to Linux VMs"
categories: linux admin howto
---

Network drives include your home folder, Research Drives, and other network drives starting with `//machine_name`.
This tutorial will mount one of your research drives.

If you want to mount some other location, e.g. a faculty drive, you'll need to change the path according to your requirements.

## Prerequisites: Install cifs-utils and create mount directory [required once]

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

<p class="personalised-default">Make sure you adjust the name of your drive in the variable <code class="language-plaintext highlighter-rouge">drive_name</code> at the beginning of the script to your needs.</p>
<p class="personalised-default">Note: For drives created after mid-September 2026, the drive location starts with <code class="language-plaintext highlighter-rouge">//research.drive.auckland.ac.nz/</code>, whereas for drives created before mid-September 2026 it starts with <code class="language-plaintext highlighter-rouge">//files.auckland.ac.nz/research/</code>.</p>
<p class="personalised-message" style="display:none;">This script has been personalised for your drive, <code class="language-plaintext highlighter-rouge personalised-drive-name"></code>.</p>

```bash
#!/bin/bash

drive_name="rescer201800002-cer-researchfolder-test"
share="//research.drive.auckland.ac.nz/${drive_name}"

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
{: .personalised-code}

If you save this code in the file `~/mount_drive.sh` and give it executable permissions via `chmod u+x ~/mount_drive.sh`, you can then run the script like this:
```bash
~/mount_drive.sh
```

## Unmount a network drive

```bash
sudo umount -l ${HOME}/rescer201800002-cer-researchfolder-test
```
{: .personalised-code}

<p class="personalised-default">Make sure you adjust the target of this command, <code class="language-plaintext highlighter-rouge">${HOME}/rescer201800002-cer-researchfolder-test</code> in this example, to the location you used when you mounted your research drive.</p>


## Symbolic links within a research-drive
--

If you want to create symbolic links within the research drive, add the option `mfsymlinks` to the list you provide in your mount command (continuing from the code above):

```bash
options="username=${USER},${common_options},mfsymlinks"
```

<script src='{{"/assets/doc/personalised-instructions.js" | relative_url}}'></script>
<script>initPersonalisedInstructions("linux", { exampleName: "rescer201800002-cer-researchfolder-test", exampleBasePath: "//research.drive.auckland.ac.nz/" })</script>
