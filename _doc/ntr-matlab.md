---
title:  "MATLAB Installation"
categories: nectar howto
---


The University of Auckland has a site-wide MATLAB licence.
While the UoA Nectar node does not provide have a custom image containing MATLAB, 
it is not difficult to install it on your Nectar instance yourself.

Firstly, create and launch your Nectar instance:
If Windows, follow the instructions at [How to access Windows VMs in Auckland cluster]({{ site.baseurl }}{% link _doc/ntr-windows/index.md %})
What follows should be run from a browser on your Nectar image.

### create a mathworks account 

Point your browser to [mathworks.com](mathworks.com) and select the "Sign In" tab at the top of the page.

![online]({{ "/assets" | append: page.id | append: "/mathworks_signup.png" | absolute_url }}){:width="70%"}
| ![online]({{ "/assets" | append: page.id | append: "/uoa_email_sign_in.png" | absolute_url }}){:width="45%"}| ![ online]({{ "/assets" | append: page.id | append: "/organizational_portal_login.png" | absolute_url }}){:width="45%"}|

Sign in with your UoA email address.
You'll be taken to UoA single-sign-on during this process, and will need your UoA two-factor authentication token.

Now that you have an account with mathworks, you can download and install MATLAB:

### Download MATLAB

From the Mathworks page, select the MATLAB link, and search for "Downloads" at the bottom of the page:
![online]({{ "/assets" | append: page.id | append: "/downloads_link.png" | absolute_url }}){:width="70%"}
Once again you'll sign in using your UoA identity.

You'll be provided with an installation appropriate to your operating system:
![online]({{ "/assets" | append: page.id | append: "/matlab_os_download.png" | absolute_url }}){:width="70%"}

Download and install the application software.

You now have Matlab on your Nectar instance.



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

[How to access Windows VMs in Auckland cluster]({{ site.baseurl }}{% link _doc/ntr-windows/index.md %})
