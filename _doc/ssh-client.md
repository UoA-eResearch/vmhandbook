---
title:  "Login to the command-line through ssh"
categories: linux admin user howto
---

## If you're using Mac or Linux

Use a terminal to log in via ssh:

```bash
$ ssh <user name>@<VM name>
```

If you have admin privileges on the VM (sudo) you need to login through [2-factor authentication]({{ site.baseurl }}{% link _doc/two-factor-authentication.md %}). Otherwise just use your University password to log in.

Example:

```bash
$ ssh mfel395@cerdkroprd01.its.auckland.ac.nz
```

## If you're using Windows

Recent versions of Windows may have an SSH client installed by default.

You can test whether an SSH client is installed by running `ssh` in a terminal. If a client is installed, you will see output like this:

```
>ssh
usage: ssh [-46AaCfGgKkMNnqsTtVvXxYy] [-B bind_interface] [-b bind_address]
           [-c cipher_spec] [-D [bind_address:]port] [-E log_file]
           [-e escape_char] [-F configfile] [-I pkcs11] [-i identity_file]
           [-J destination] [-L address] [-l login_name] [-m mac_spec]
           [-O ctl_cmd] [-o option] [-P tag] [-p port] [-Q query_option]
           [-R address] [-S ctl_path] [-W host:port] [-w local_tun[:remote_tun]]
           destination [command [argument ...]]
```

If the default client is not already available, you may need to enable it. Search in Windows for "Optional Features", click "View features" and look for "OpenSSH Client".

Alternatively, you can install one of the following:
- [MobaXterm](https://mobaxterm.mobatek.net/)
- [Git bash](https://git-scm.com/download/win)
- [PuTTY](https://git-scm.com/download/win)

After ensuring that a client is installed, follow the same steps as Linux/Mac to login.

