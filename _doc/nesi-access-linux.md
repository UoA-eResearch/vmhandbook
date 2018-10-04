---
title:  "Login to NeSI from a Research VM and transfer files via SSH"
categories: linux admin user howto
---

For security reasons Linux VMs by default don't have access to the Internet. To connect to (new) NeSI platform follow the steps below:

1. Install corkscrew 

    On **Ubuntu** you can install corkscrew through apt. You need to have sudo privileges to do that.
	
    ```
    sudo apt-get install corkscrew
    ```

    On **RHEL** you need to download and build corkscrew.

    a. Clone or download corkscrew [from Github](https://github.com/bryanpkc/corkscrew)

    b. Follow the [instructions here](https://github.com/bryanpkc/corkscrew#how-do-i-install-it) on how to install it 

    Contact us, if you need help with installing corkscrew.

2. Run following commands in the terminal:

    a. Make sure that you have `~/.ssh` folder 
	
	```
	mkdir -p ~/.ssh
	```
	
	b. Add NeSI nodes lander, maui and mahuika to `~/.ssh/config`
	
	```
	echo " Host mahuika
		Hostname login.mahuika.nesi.org.nz
		ProxyCommand ssh -W %h:%p lander
		ForwardX11 yes
		ForwardX11Trusted yes
		ServerAliveInterval 300
		ServerAliveCountMax 2

	Host maui
		Hostname login.maui.nesi.org.nz
		ProxyCommand ssh -W %h:%p lander
		ForwardX11 yes
		ForwardX11Trusted yes
		ServerAliveInterval 300
		ServerAliveCountMax 2

	Host lander
		ProxyCommand corkscrew squid.auckland.ac.nz 3128  %h %p
		Hostname lander02.nesi.org.nz
		ForwardX11 yes
		ForwardX11Trusted yes
		ServerAliveInterval 300
		ServerAliveCountMax 2
	" >> ~/.ssh/config
	```
	c. Correct file permissions
	
	```
	chmod 600 ~/.ssh/config
	```
	
3. To log in to Mahuika or Maui run `ssh mahuika` or `ssh maui` in a terminal on the VM. To transfer files from Mahuika or Maui to the VM run `scp -r mahuika:/some/folder .` or `scp -r maui:/some/folder .` (make sure to replace /some/folder by an existing directory you have access to).

Note:

This how-to guide is adapted from [NeSI Support article](https://support.nesi.org.nz/hc/en-gb/articles/360000161315)
