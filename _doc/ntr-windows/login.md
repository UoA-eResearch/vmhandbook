
---
title:  "remote login to Windows VMs in Auckland cluster"
   

## Remote login via Remote Desktop

Note: you must enable remote desktop protocol (RDP) ingress on port 3389 in the security groups of your nectar windows vm to be able to remotely login. 
In addition, if you're off-campus, you will need to connect to the University VPN first.

If you're logging in from a Windows desktop, **Microsoft Remote Desktop** is built-in. For users logging in from MacOS, download the **Microsoft Remote Desktop** client from the [Mac App Store](https://itunes.apple.com/us/app/microsoft-remote-desktop/id1295203466?mt=12){:target="_blank"}.

Find the IP address of your nectar VM on the instance overview page, as follows:

![step1]({{ "/assets" | append: page.id | append: "/step1.png" | absolute_url }}){:width="70%"}

Open **Microsoft Remote Desktop** application, create a new connection, and in the dialogue box, enter your VM's IP address as "PC name".

![step2]({{ "/assets" | append: page.id | append: "/step2.png" | absolute_url }}){:width="70%"}

Connect to your VM, and login with res-admin's credential. 

