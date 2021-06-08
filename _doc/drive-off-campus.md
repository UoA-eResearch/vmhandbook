---
title:  "Access from off campus"
categories: howto drive windows linux admin user
---
 
Resources on the UoA network are protected by the UoA firewall. This means that by default they are not able to be accessed from off campus. This applies to:
- UoA network drives such as Unifiles research drives
- Windows & Linux Research VMs
- Windows Nectar VMs (but not Linux Nectar VMs)  

To access the above resources from off campus:

- You need to be connected to the UoA VPN. This enables your computer to communicate with UoA resources as though it were on campus.
- If you are mapping a research drive for the first time, you need to enter your username as `UOA\your_upi_here`.

#### Connecting to the VPN
Guides detailing how to install FortiClient and connect to the VPN:

* [FortiClient guide]({{ "/assets" | append: page.id | append: "/how-to-guide-for-forticlient-vpn.pdf" | absolute_url }})
* [Windows Video Guide ]( https://youtu.be/xRTBHlLycm4)
* [Video Guide ]( https://youtu.be/tYSyPi9hM5Y)
  
Once you have successfully connected to the UoA VPN, you can refer to the below links for instructions on accessing network drives and VMs.
#### Mapping your research drive

* Mac:
    - [Text Guide]({{ site.baseurl }}{% link _doc/map-drive-mac.md %})
    - [Video Guide]( https://youtu.be/1TF_5Ejpmv4)
* Windows:
    - [Text Guide]({{ site.baseurl }}{% link _doc/map-drive-windows.md %})
    - [Video guide]( https://youtu.be/HNlL4UCZcIs)

#### Connecting to your VM

* [Connecting to Windows Research VMs]({{ site.baseurl }}{% link _doc/remote-desktop.md %})
* Connecting to Linux Research VMs
    - [command line session via SSH]({{ site.baseurl }}{% link _doc/ssh-client.md %})
    - [graphical session via x2go]({{ site.baseurl }}{% link _doc/x2go-client.md %})
    - [graphical session via remote desktop client]({{ site.baseurl }}{% link _doc/linux-rdp-client.md %})
* [Connecting to Nectar Windows VMs]({{ site.baseurl }}{% link _doc/ntr-windows.md %})