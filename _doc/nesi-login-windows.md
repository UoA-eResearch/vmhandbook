---
title:  "Login (SSH) to NeSI from a Research VM"
categories: windows admin user howto
---

For security reasons Windows VMs by default don't have access to the Internet. To connect to (new) NeSI platform follow the steps below:

1. Assuming that you are using [MobaXterm](https://mobaxterm.mobatek.net/) and other [pre-requisites](https://support.nesi.org.nz/hc/articles/360000335975) are met.
2. Launch MobaXterm and install 'corkscrew' package.

    ![useful image]({{ "/assets" | append: page.id | append: "/packages.png" | absolute_url }}){:width="600px"}
    ![useful image]({{ "/assets" | append: page.id | append: "/corkscrew.png" | absolute_url }}){:width="600px"}

3. Start Local Terminal.

    ![useful image]({{ "/assets" | append: page.id | append: "/mobaxterm-launch.png" | absolute_url }}){:width="600px"}
    ![useful image]({{ "/assets" | append: page.id | append: "/local-terminal.png" | absolute_url }}){:width="600px"}

4. Run following commands in the terminal:

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
	
5. Login to Mahuika or Maui by simply running `ssh mahuika` or `ssh maui` in terminal

Note:

- This how-to guide is adapted from [NeSI Support article](https://support.nesi.org.nz/hc/en-gb/articles/360000161315)