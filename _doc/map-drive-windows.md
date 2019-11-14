---
title:  "Map network drives to Windows VMs"
categories: windows admin user howto
---

Network drives include Unifiles, research drive and other network file systems that start with `\\machine_name`. This tutorial will mount network folder `\\files.auckland.ac.nz\myhome\` to Windows VM's `F:\` drive. You may need to change the paths according to your own requirements.

1. Open **File Explorer** and select **This PC**.

2. Click the **Map network drive** button in the ribbon menu at the top, then select "Map network drive." (This is under the Computer tab, which should open automatically when you go to This PC, as above.)

    ![useful image]({{ "/assets" | append: page.id | append: "/screenshot1.png" | absolute_url }}){:width="600px"}

3. Select the drive letter you want to use for the network folder, then enter the path `\\files.auckland.ac.nz\myhome\`. Make sure the path exists.

    ![useful image]({{ "/assets" | append: page.id | append: "/screenshot2.png" | absolute_url }}){:width="600px"}

4. Confirm your selection and click **Finish**. You can choose to reconnect to the folder every time you sign in so it's always available to you and, if needed, use a different user account to connect to the folder.

When you're done, you should see the new drive letter under This PC and will be able to access its contents like you would any other folder. If you want to disconnect the network drive, right-click on it and select **Disconnect**.
