---
title:  "Login to a graphical desktop environment"
categories: linux admin user howto
---


desktop environment on remote vm
---------------------------------

Prepare to install new packages:
```
sudo apt update
```


# XFCE (recommended)
```
sudo apt install xfce4 xfce4-goodies
```

# LXDE (very lightweight)
```
sudo apt install lxde
```

# MATE (for a more traditional desktop)
```
sudo apt install ubuntu-mate-desktop
```



https://mylinux.work/guides/remmina-remote-desktop-client/


x2go
====

On the machine you'll connect from, install the x2go client:

Connecting from a Linux Client
BASH
￼
```
sudo apt-add-repository ppa:x2go/stable
sudo apt update
sudo apt install x2goclient
```

connecting from a MacOS client:
```
brew install --cask xquartz
brew install --cask x2goclient
```

__Note: Login via x2go only works on Linux VMs that are set up for this. Please check with CeR if it doesn't work for you and you feel it should work.__

## Download and install X2GO client

Please follow [this article](https://wiki.x2go.org/doku.php/doc:installation:x2goclient){:target="_blank"}.

## Configure a connection to your VM

After starting the X2GO client, first create a new session:

![useful image]({{ "/assets" | append: page.id | append: "/x2go_screenshot1.png" | absolute_url }}){:width="600px"}

On the session tab, give your session a meaningful name and write the name of the VM into the "Host" field and your user name into the "Login" field. Make sure you choose MATE from the "Session type" selection menu.

![useful image]({{ "/assets" | append: page.id | append: "/x2go_screenshot2.png" | absolute_url }}){:width="600px"}

On the Media tab, please disable "Sound" and "Client side printing support:

![useful image]({{ "/assets" | append: page.id | append: "/x2go_screenshot3.png" | absolute_url }}){:width="600px"}

Then click Ok. The new session will then show up on the right side of your X2GO client window.

## Login

To log in, click the session you need. If you have sudo privileges on the VM you need to use [2-factor authentication]({{ site.baseurl }}{% link _doc/two-factor-authentication.md %}) for the Password field. Otherwise just type your University password.
