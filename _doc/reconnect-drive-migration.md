---
title:  "Reconnecting a Research Drive after the storage migration"
categories: mac windows linux howto drive
---

The University is performing a [file storage upgrade](https://www.auckland.ac.nz/en/intranet/stay-informed/improvement-projects-programmes/file-storage-upgrade-home-shared-research-drives.html) which involves migrating Research Drives to a new storage platform. You will need to reconnect any migrated Research Drives to your machine to continue accessing them. See instructions below for each operating system.

The new storage platform does not yet have an Archive or Vault facility, so migrated files within the 'Archive' folder will no longer be archived on tape storage (but all files on the new platform are still backed up daily).

[Other stuff about the new storage platform]

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

5. In the **Folder** box, enter the new drive location you were sent when the drive was migrated. It will look similar to this:
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

3. In the Server Address field, enter the drive location you were sent when the drive was created. It will look similar to this: 
   </p><code>smb://research.drive.auckland.ac.nz/ressci202400035-drive-name</code></p>

4. Click **+** to add the Research Drive location to **Favourite Servers** 

5. Click **Connect**. 

![useful image]({{ "/assets" | append: page.id | append: "/map-mac-drive.png" | absolute_url }}){:width="600px"}

If prompted, enter your University username and password ensuring the Domain is UOA.

![useful image]({{ "/assets" | append: page.id | append: "/map-mac-drive-username.png" | absolute_url }}){:width="600px"}

## Connecting on a Linux machine

### Persistent Research Drive Mount <!-- omit in toc -->

System maintenance on the vm will cause it to occasionally reboot.
This section outlines how to ensure the drive is automatically remounted after reboot.

#### Set up a credentials file <!-- omit in toc -->

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

#### Gather auxilliary information <!-- omit in toc -->

Find your user identity on the vm with the command

```bash
id
```

and observe the values of your *uid* and *gid* (user-id and group-id).

We assume you mount the drive on your home directory as above, e.g. `~/<research_drive_mount_point>`.

#### edit /etc/fstab with sudo <!-- omit in toc -->

Using sudo, edit the file `/etc/fstab` and append the following line to it, substituting your values:

Use `<drive_server_path_prefix>` as either `//research.drive.auckland.ac.nz/` (drives created after mid-September 2026) or `//files.auckland.ac.nz/research/` (drives created before mid-September 2026).

```
<drive_server_path_prefix><research_drive_name>  /home/<your_username_on_the_vm>/<research_drive_mount_point>  cifs nofail,credentials=/home/<your_username_on_the_vm>/.cifs_credentials,uid=<your_uid>,gid=<your_gid>,users 0   0
```

Unmount the research drive in order to test the fstab configuration:

```bash
sudo mount -av
```
----

### Shared Research Drive Access <!-- omit in toc -->
(Taken from [RedHat documentation](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html-single/managing_file_systems/index#proc_accessing-a-share-as-a-user_assembly_performing-a-multi-user-smb-mount))

One method of sharing a mount of a research drive is by having an admin user set up the mount with the multiuser option, mounting the drive, and then letting individual users authenticate with cifs using their credentials.

#### Superuser setup <!-- omit in toc -->

1. A superuser creates the folder `/mnt/<research_drive_name>`
   with group owner the vm's rw(user) group name:

   ```bash
   mkdir -p /mnt/<research_drive_name>
   chown <user>:<vm_rw_group_name> /mnt/<research_drive_name>
   ```

2. This superuser then creates a secure credentials file for their access to the research drive:

   E.g. create the file `/<some_directory_path>/.smb.cred`
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

   Note: For drives created after mid-September 2026, the drive location starts with `//research.drive.auckland.ac.nz/`, whereas for drives created before mid-September 2026 it starts with `//files.auckland.ac.nz/research/`.

   ```bash
   <drive_server_path_prefix><research_drive_name>  /mnt/unifiles   cifs multiuser,sec=ntlmssp,credentials=/<some_directory_path>/.smb.cred,noauto  0 0
   systemctl daemon-reload
   ```

4. A superuser effectively mounts the drive under their username, supplying the credentials file to /etc/fstab.

#### User access <!-- omit in toc -->

Any user of the vm who has access to the research-drive (belongs to the appropriate vmuser group) then
provides their credentials for the research-drive server (`research.drive.auckland.ac.nz`) to the kernel’s keyring with the command:

```bash
cifscreds add -u $USER research.drive.auckland.ac.nz
```

They can then access the drive with their permissions in the directory `/mnt/<research_drive_name>`.