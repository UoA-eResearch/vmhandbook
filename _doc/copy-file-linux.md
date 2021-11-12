---
title:  "How to copy files from/to a Linux VM"
categories: linux user howto
---


## Copy files with SFTP

We recommend to use [FileZilla Client](https://filezilla-project.org/){:target="_blank"} to connect to your Linux VM. FileZilla supports Windows, Linux and Mac. Other SFTP clients can also be used. E.g., [CyberDuck](https://cyberduck.io/), [WinSCP](https://winscp.net).  

In Site Manager dialog of FileZilla, create a new site and fill in the following information:

- **Host**: the FQDN of your VM.
- **Port**: leave it blank
- **Protocol**: SFTP - SSH File Transfer Protocol
- **Logon Type**: Ask for password
- **User**: Your username
- **Password**: leave it blank

![useful image]({{ "/assets" | append: page.id | append: "/filezilla.png" | absolute_url }}){:width="600px"}

After clicking **Connect** button, enter password dialog will popup. In this dialog, uncheck the **Remember password until FileZilla is closed** checkbox, and enter the same password as [SSH login]({{ site.baseurl }}{% link _doc/ssh-client.md %}).

![useful image]({{ "/assets" | append: page.id | append: "/filezilla2.png" | absolute_url }}){:width="300px"}

## Copy files with SCP

Linux and macOS systems by default come with a command line SCP client. Windows SCP client is available in [MobaXterm](https://mobaxterm.mobatek.net/) and [Git bash](https://git-scm.com/download/win).


There are a lot of in-detail manuals for the scp command to be found on the Internet, here is a quick guide on how to use it normally:

```bash
# Upload the file yourFile.xyz to your home directory on the VM
$ scp yourFile.xyz username@cerzheprd03.its.auckland.ac.nz:~/.
 
# Upload the folder yourFolder to your home directory on the VM
$ scp -r yourFolder username@cerzheprd03.its.auckland.ac.nz:~/.
```

Downloading files from your home directory on the login node to your home directory on your local machine is a similar process as shown below:

```bash
# Download the file ~/yourFile.xyz to your home directory on your computer
$ scp username@cerzheprd03.its.auckland.ac.nz:~/yourFile.xyz ~/.
 
# Download the folder yourFolder to your home directory on your computer
$ scp -r username@cerzheprd03.its.auckland.ac.nz:~/yourFolder ~/.
```
