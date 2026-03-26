---
title:  "Set up internet connection via the UoA proxy server"
categories: howto linux admin user
---

For security reasons Linux VMs by default don’t have access to the Internet. To access the internet, the proxy server must be configured.
#### Configure the proxy server for all users
To configure this for all users, you must be an admin.
1. Add the following to the bottom of the files `/etc/profile.d/squid.sh` and `/etc/bash.bashrc`:  
`export http_proxy=http://squid.auckland.ac.nz:3128`  
`export https_proxy=http://squid.auckland.ac.nz:3128`  
`export no_proxy=localhost,127.0.0.1,localaddress,.auckland.ac.nz,keystone.rc.nectar.org.au`

2. To make sure the added environment variables work properly when using sudo, edit sudoers using the command `sudo visudo` (don't edit sudoers manually!) and add the following to the very bottom (case sensitive):  
`Defaults env_keep = "http_proxy https_proxy no_proxy"`

3. To see changes, log out then back in again.  

#### Configure the proxy server for your account only
1. Add the following to the bottom of the file `~/.bashrc`:  
`export http_proxy=http://squid.auckland.ac.nz:3128`  
`export https_proxy=http://squid.auckland.ac.nz:3128`  
`export no_proxy=localhost,127.0.0.1,localaddress,.auckland.ac.nz,keystone.rc.nectar.org.au`
2. Log out then back in again, or in your current shell session run `source ~/.bashrc`

#### SSH via the proxy server
To SSH to a host (e.g. `lander`) through the UoA proxy, use the `ProxyCommand` option:
```
ssh -o "ProxyCommand=ncat --proxy squid.auckland.ac.nz:3128 --proxy-type http %h %p" lander
```

You can also add this `ProxyCommand` to the `Host lander` section of your `~/.ssh/config` file so you don't have to specify it each time:
```
Host lander
    ProxyCommand ncat --proxy squid.auckland.ac.nz:3128 --proxy-type http %h %p
```
