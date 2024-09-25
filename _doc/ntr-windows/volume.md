
---
title:  "Managing a Data Volume on a Windows Nectar instance"
---

## Contents
  - [Request a Volume in Nectar](#request-a-volume-in-nectar)
  - [Managing a Volume in Nectar](#managing-a-volume-in-nectar)


Data storage "volumes" are available within Nectar allocations:  these are filesystems you can attach to a Nectar instance to store your research data.
The volume filesystem is separate from the instance operating system filesystem - 
it is recommended that you keep all your research data on storage volumes which are portable, 
and secure should the operating system fail in any way.
A volume can be detached from one Nectar instance and re-attached to another should you 
wish to move your work from one instance to another.


###Request a Volume in Nectar
Please see [request volume allocation on nectar](https://tutorials.rc.nectar.org.au/volume-storage/02-allocation)

###Managing Volumes on Nectar Instances

### Linux Nectar Instance
This is documented at [managing volumes on linux Nectar instances](https://tutorials.rc.nectar.org.au/volume-storage/01-overview)

###Windows Nectar Instances

####Create and format Windows partition on new empty volume
(Note: this step will overwrite any content on an existing volume)

1. Create and attach the volume to your instance using the Nectar dashboard as per the documentation on 
[create and attach volume]( https://tutorials.rc.nectar.org.au/volume-storage/03-create-attach)
This step makes the volume visible on your instance.

2. Create and format a disk partiton on your volume - this makes the volume usable
Now we use Windows tools to create and configure the filesystem.  Follow
[Microsoft documentation](https://support.microsoft.com/en-us/windows/create-and-format-a-hard-disk-partition-bbb8e185-1bda-ecd1-3465-c9728f7d7d2e)
for this step.

## Make the Windows-formatted volume usable on your Nectar instance

a. <i>on the Nectar dashboard</i>, select your instance and attach the volume:
See the section  "Attach a volume" of https://tutorials.rc.nectar.org.au/volume-storage/03-create-attach.
b. <i>on your instance</i>, open <code> Control-Panel -> System and Security -> Administrative Tools -> Computer Management -> Storage -> Disk Management</code>
you should now be able to see your volume as a disk,
but it will probably be offline.

Select the offline text and a dropdown should appear which allows you to select "Online".
Select this and your volume should now be fully available.






