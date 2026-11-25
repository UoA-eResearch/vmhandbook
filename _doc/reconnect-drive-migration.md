---
title:  "Reconnect a Research Drive after the storage migration"
categories: mac windows linux howto drive
---

The University is performing a [file storage upgrade](https://www.auckland.ac.nz/en/intranet/stay-informed/improvement-projects-programmes/file-storage-upgrade-home-shared-research-drives.html) which involves migrating Research Drives to a new storage platform. You will need to reconnect any migrated Research Drives to your machine to continue accessing them. See instructions below for each operating system.

# Contents <!-- omit in toc -->
- [Connecting on a Windows machine](#connecting-on-a-windows-machine)
- [Connecting on a Mac machine](#connecting-on-a-mac-machine)
- [Connecting on a Linux machine](#connecting-on-a-linux-machine)

## Connecting on a Windows machine

1. If you are **off-campus** connect via the University [Virtual Private Network](https://www.auckland.ac.nz/en/students/academic-information/postgraduate-students/postgraduate/postgraduate-support-and-services/vpn-service.html) (VPN).

2. Open **File Explorer** from the taskbar or the Start menu. 

3. Select **This PC**, then:

    a. Windows 10: Select **Map Network Drive** from the Computer tab
    
    OR
    
    b. Windows 11: Select **•••** on the File Explorer ribbon, then **Map Network Drive**.

    ![useful image]({{ "/assets" | append: page.id | append: "/map-drive-windows-win10-11.png" | absolute_url }}){:width="1000px"}

4. In the **Drive** list, select a free drive letter.

5. In the **Folder** box, enter the new drive location you were emailed when the drive was migrated. It will look similar to this:
    <p><code>\\research.drive.auckland.ac.nz\ressci202400035-drive-name</code></p>

6. Make sure that **Reconnect at login** remains ticked.

7. Click **Finish**.
**Note**: If you receive an error message when attempting to map the drive, please sign out or restart your machine and try again.


    ![useful image]({{ "/assets" | append: page.id | append: "/map-drive-windows-options.png" | absolute_url }}){:width="500"}

9. If prompted, enter your University username and password ensuring the Domain is UOA.


    ![useful image]({{ "/assets" | append: page.id | append: "/map-drive-windows-credentials2.png" | absolute_url }}){:width="500"}

## Connecting on a Mac machine

1. If you are **off-campus** connect via the University [Virtual Private Network](https://www.auckland.ac.nz/en/students/academic-information/postgraduate-students/postgraduate/postgraduate-support-and-services/vpn-service.html) (VPN). 

2. Click on the **Finder** icon, press command ⌘ + K to bring up the **Connect to Server** window. 

3. In the Server Address field, enter the drive location you were emailed when the drive was migrated. It will look similar to this: 
   </p><code>smb://research.drive.auckland.ac.nz/ressci202400035-drive-name</code></p>

4. Click **+** to add the Research Drive location to **Favourite Servers** 

5. Click **Connect**. 

![useful image]({{ "/assets" | append: page.id | append: "/map-mac-drive.png" | absolute_url }}){:width="600px"}

If prompted, enter your University username and password ensuring the Domain is UOA.

![useful image]({{ "/assets" | append: page.id | append: "/map-mac-drive-username.png" | absolute_url }}){:width="600px"}

## Connecting on a Linux machine

If you are **off-campus** connect via the University [Virtual Private Network](https://www.auckland.ac.nz/en/students/academic-information/postgraduate-students/postgraduate/postgraduate-support-and-services/vpn-service.html) (VPN).

### Install cifs-utils and create mount directory [required once] <!-- omit in toc -->

You need to have sudo privileges to mount network drives.

On Ubuntu run:

```bash
sudo apt-get update
sudo apt-get install cifs-utils
```

On Red Hat run:

```bash
sudo yum update
sudo yum install cifs-utils
```

### Mount a research drive <!-- omit in toc -->

Below is a script you can use to mount a research drive.

Make sure you edit the <code>drive_name</code> variable to match your drive.

```bash
#!/bin/bash

drive_name="rescer201800002-cer-researchfolder-test"
share="//research.drive.auckland.ac.nz/${drive_name}"

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

### Unmount a network drive <!-- omit in toc -->

```bash
sudo umount -l ${HOME}/rescer201800002-cer-researchfolder-test
```
Make sure you adjust the target of this command, <code>${HOME}/rescer201800002-cer-researchfolder-test</code> in this example, to the location you used when you mounted your research drive.</p>

### Symbolic links within a research-drive <!-- omit in toc -->

If you want to create symbolic links within the research drive, add the option `mfsymlinks` to the list you provide in your mount command (continuing from the code above):

```bash
options="username=${USER},${common_options},mfsymlinks"
```