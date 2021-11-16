---
title:  "Login to a graphical desktop environment with a remote desktop client"
categories: vmware linux user howto
permalink: /linux/rdp/
---

__Note: Login via MS Remote Deskop only works on Linux VMs that are set up for this. Please check with CeR if it doesn't work for you and you feel it should work.__

## Windows Client

**Remote Desktop Connection** is pre-installed with all Windows versions except home editions. 

Create a new remote desktop connection. Set the **Computer** as the VM's host name and **User name** as your University username.

(Note, that the exact look may differ from what you see below if you are using a different version of the remote desktop connection than we used to create this manual)

![useful image]({{ "/assets" | append: page.id | append: "/screenshot1.png" | absolute_url }}){:width="50%"}

Then, click **Connect** and enter your university password. If you have sudo privileges on the VM you need to use [2-factor authentication]({{ site.baseurl }}{% link _doc/compute/vmware/two-factor-authentication.md %}) for the Password field. Otherwise just type your University password.

![useful image]({{ "/assets" | append: page.id | append: "/screenshot1a.png" | absolute_url }}){:width="50%"}

Click 'OK' to connect to the virtual machine.

## Mac Client

Download the **Microsoft Remote Desktop** client from the [Mac App Store](https://itunes.apple.com/us/app/microsoft-remote-desktop/id1295203466?mt=12){:target="_blank"}.

Create a new remote desktop connection. Set the **PC name** as the VM's host name and **User name** as your University username.

(Note, that the exact look may differ from what you see below if you are using a different version of the remote desktop connection than we used to create this manual)
    
![useful image]({{ "/assets" | append: page.id | append: "/screenshot2.png" | absolute_url }}){:width="50%"}

Then, you can login with your university password. If you have sudo privileges on the VM you need to use [2-factor authentication]({{ site.baseurl }}{% link _doc/compute/vmware/two-factor-authentication.md %}) for the Password field. Otherwise just type your University password.


## Accessing Local Files and Folders on Remote Desktop Session

To access local files from virtual machines, you need to configure the remote desktop connection settings **before** connecting to the VM.

On Windows, choose your **local resources** in the settings of your remote desktop connection window.  Notice below the **More** button at the bottom which takes you to the local devices and resources section which allows resources to be chosen.

![useful image]({{ "/assets" | append: page.id | append: "/screenshot3.png" | absolute_url }}){:width="50%"}

On Mac, Add local resources follow the screen shot below:

![useful image]({{ "/assets" | append: page.id | append: "/screenshot4.png" | absolute_url }}){:width="50%"}

On a Ubuntu virtual machine, you will see these redirected drives on your Desktop by clicking on the icon **thinclient_drives**:

![useful image]({{ "/assets" | append: page.id | append: "/screenshot5.png" | absolute_url }}){:width="50%"}

