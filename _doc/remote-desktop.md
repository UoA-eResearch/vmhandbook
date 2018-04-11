---
title:  "Login with a remote desktop client"
categories: windows admin user howto
---

## Windows Client

**Remote Desktop Connection** is pre-installed with all Windows versions except home editions. 

Create a new remote desktop connection. Set the **Computer** as the VM's host name and **User name** as `UOA\<Your user name>`.

![useful image]({{ "/assets" | append: page.id | append: "/screenshot1.png" | absolute_url }}){:width="50%"}

Then, click **Connect** and enter your university password.

## Mac Client

Download the **Microsoft Remote Desktop** client from the [Mac App Store](https://itunes.apple.com/us/app/microsoft-remote-desktop/id1295203466?mt=12){:target="_blank"}.

Create a new remote desktop connection. Set the **PC name** as the VM's host name and **User name** as `UOA\<Your user name>`.
    
![useful image]({{ "/assets" | append: page.id | append: "/screenshot2.png" | absolute_url }}){:width="50%"}

Then, you can login with your university password.


## Accessing Local Files and Folders on Remote Desktop Session

On Windows, choose your **local resources** in the settings of your RDP connect window.  Notice below the **More** button at the bottom which takes you to the local devices and resources section which allows resources to be chosen.

![useful image]({{ "/assets" | append: page.id | append: "/screenshot3.png" | absolute_url }}){:width="50%"}

On Mac, Add local resources follow the screen shot below:

![useful image]({{ "/assets" | append: page.id | append: "/screenshot4.png" | absolute_url }}){:width="50%"}


On your target remote desktop connection, you will see these redirected drives underneath your Devices and drives area of Explorer. They will be designated by "drive letter" on "computername" where computername is your host.

