---
title:  "Map a Research Drive to a Windows computer"
categories: windows admin user howto drive
---

Steps:

1. If you are **off-campus** connect via the University [Virtual Private Network](https://www.auckland.ac.nz/en/students/academic-information/postgraduate-students/postgraduate/postgraduate-support-and-services/vpn-service.html) (VPN).

2. Open **File Explorer** from the taskbar or the Start menu. 

3. Select **This PC**, then:
    a. Windows 10: Select **Map Network Drive** from the Computer tab
    OR
    b. Windows 11: Select **•••** on the File Explorer ribbon, then **Map Network Drive**.


    ![useful image]({{ "/assets" | append: page.id | append: "/map-drive-windows-win10-11.png" | absolute_url }}){:width="1000px"}

4. In the **Drive** list, select a free drive letter.

5. In the **Folder** box, enter `\\files.auckland.ac.nz\research\` followed by the name of the Research Drive. It will look similar to this:
 `\\files.auckland.ac.nz\research\ressci202400035-drive-name`

6. Make sure that **Reconnect at login** remains ticked.

7. Click **Finish**.


    ![useful image]({{ "/assets" | append: page.id | append: "/map-drive-windows-options.png" | absolute_url }}){:width="500"}

8. If prompted, enter your University username and password ensuring the Domain is UOA.


    ![useful image]({{ "/assets" | append: page.id | append: "/map-drive-windows-credentials2.png" | absolute_url }}){:width="500"}

**Note**: If you receive an error message when attempting to map the drive, please sign out or restart your machine and try again.
