---
title:  "Login to a graphical desktop environment through X2Go"
categories: admin user
---


## Download and install X2GO client

Please follow [this article](https://wiki.x2go.org/doku.php/doc:installation:x2goclient){:target="_blank"}.

## Configure a connection to your VM

After starting the X2GO client, first create a new session:

![useful image]({{ "/assets" | append: page.id | append: "/x2go_screenshot1.png" | absolute_url }}){:width="600px"}

On the session tab, give your session a meaningful name and write the name of the VM into the "Host" field and your UPI into the "Login" field. Make sure you choose MATE from the "Session type" selection menu.

![useful image]({{ "/assets" | append: page.id | append: "/x2go_screenshot2.png" | absolute_url }}){:width="600px"}

On the Media tab, please disable "Sound" and "Client side printing support:

![useful image]({{ "/assets" | append: page.id | append: "/x2go_screenshot3.png" | absolute_url }}){:width="600px"}

Then click Ok. The new session will then show up on the right side of your X2GO client window.

## Login

To log in, click the session you need. If you have sudo privileges on the VM you need to use [2-factor authentication]({{ site.baseurl }}{% link _doclinux/two-factor-authentication.md %}) for the Password field. Otherwise just type your University password.
