---
title:  "Connect to a Research Drive on a Windows computer"
categories: windows admin user howto drive
---

1. If you are **off-campus** connect via the University [Virtual Private Network](https://www.auckland.ac.nz/en/students/academic-information/postgraduate-students/postgraduate/postgraduate-support-and-services/vpn-service.html) (VPN).

2. Open **File Explorer** from the taskbar or the Start menu. 

3. Select **This PC**, then:

    a. Windows 10: Select **Map Network Drive** from the Computer tab
    
    OR
    
    b. Windows 11: Select **•••** on the File Explorer ribbon, then **Map Network Drive**.

    ![useful image]({{ "/assets" | append: page.id | append: "/map-drive-windows-win10-11.png" | absolute_url }}){:width="1000px"}

4. In the **Drive** list, select a free drive letter.

5. In the **Folder** box, enter the drive location you were sent when the drive was created:

    a. For drives created after mid-September 2026, enter `\\research.drive.auckland.ac.nz\` followed by the name of the Research Drive. It will look similar to this:
    `\\research.drive.auckland.ac.nz\ressci202400035-drive-name`

    OR

    b. For drives created before mid-September 2026, enter `\\files.auckland.ac.nz\research\` followed by the name of the Research Drive. It will look similar to this:
    `\\files.auckland.ac.nz\research\ressci202400035-drive-name`

6. Make sure that **Reconnect at login** remains ticked.

7. Click **Finish**.
**Note**: If you receive an error message when attempting to map the drive, please sign out or restart your machine and try again.


    ![useful image]({{ "/assets" | append: page.id | append: "/map-drive-windows-options.png" | absolute_url }}){:width="500"}

9. If prompted, enter your University username and password ensuring the Domain is UOA.


    ![useful image]({{ "/assets" | append: page.id | append: "/map-drive-windows-credentials2.png" | absolute_url }}){:width="500"}
