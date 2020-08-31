---
title:  "How to launch an instance with Matlab pre-installed"
categories: nectar howto
---

## Matlab Images

We offer two images with Matlab pre-installed:
- **UoA-Server2012-MATLAB**: Windows Server 2012, Matlab 2018b
- **UoA-Ubuntu1604-MATLAB**: Ubuntu Linux 1604, Matlab 2017b

To find these images, login to [Nectar Dashboard](https://dashboard.rc.nectar.org.au/) via Tuakiri. Browse to *Project > Compute > Images* as shown in the picture below, and enter `Matlab` in the search box. If there are multiple images, please always choose the latest one, and click the "Launch" button to start the new instance wizard.

![Fig1 Image]({{ "/assets" | append: page.id | append: "/fig1-image.png" | absolute_url }}){:width="60%"}

**Note**: You might also find some other community Matlab images, please don't use them and use those start with `UoA`. If you can not find these images, please [contact us]({{ site.baseurl }}{% link contact.md %}) and we'll grant you access.

Launch a VM with the image, and you'll be able to use Matlab when the VM is active.

## Matlab on Linux VMs

You can access the GUI of the Matlab instance via x2go client. Please follow [this article](https://wiki.x2go.org/doku.php/doc:installation:x2goclient){:target="_blank"} to install x2go client.

In x2go client, create a new session, and make sure the following items are correctly configured:
- **Host**: the IP address of your VM.
- **Login**: enter `ubuntu`.
- **SSH port**: enter `22`.
- **Use RSA/DSA key for ssh connection**: enter the path of your private key.
- **Session type**: select `MATE` from the dropdown menu.

Then, connect with the new session, you should be able to see the graphical user interface of you GPU VM.


## Matlab on Windows VMs

To connect to your Windows VM on Nectar, please refer to this article:

[How to access Windows VMs in Auckland cluster]({{ site.baseurl }}{% link _doc/ntr-windows.md %})
