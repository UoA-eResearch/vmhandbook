---
title:  "Map network drives to Windows VMs"
categories: windows admin user howto
---

Network drives include your Unifiles home folder, Unifiles research drives and other network file systems that start with `\\machine_name`.
This tutorial will mount your Unifiles home folder `\\files.auckland.ac.nz\myhome` to Windows VM’s `F:\` drive.

To mount a research drive (should you have one), you need to use `\\files.auckland.ac.nz\research\YOUR_DRIVE_NAME`, where YOUR_DRIVE_NAME needs to be replaced by the name of your research drive (research drive names look similar to this: rescer201800002-cer-researchfolder-test).

If you want to mount some other location, e.g. a faculty drive, you'll need to change the path according to your requirements.

1. Open **File Explorer** and select **This PC**.

2. Click the **Map network drive** button in the ribbon menu at the top, then select "Map network drive." (This is under the Computer tab, which should open automatically when you go to This PC, as above.)

    ![useful image]({{ "/assets" | append: page.id | append: "/screenshot1.png" | absolute_url }}){:width="600px"}

3. Select the drive letter you want to use for the network folder, then enter the path `\\files.auckland.ac.nz\myhome\`. Make sure the path exists.

    ![useful image]({{ "/assets" | append: page.id | append: "/screenshot2.png" | absolute_url }}){:width="600px"}

4. Confirm your selection and click **Finish**. You can choose to reconnect to the folder every time you sign in so it's always available to you and, if needed, use a different user account to connect to the folder.

When you're done, you should see the new drive letter under This PC and will be able to access its contents like you would any other folder. If you want to disconnect the network drive, right-click on it and select **Disconnect**.
