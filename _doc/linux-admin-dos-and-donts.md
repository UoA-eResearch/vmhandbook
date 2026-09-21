---
title:  "Dos and Don'ts for Linux VM administrators"
categories: linux admin howto
---

As an administrator you have `sudo` privileges on your research VM, which means you share the responsibility of keeping it healthy and secure with us. 
This page lists the things we ask you to do regularly, and the things we ask you not to do.

If you are unsure about anything on this page, please [contact us]({{ site.baseurl }}{% link contact.md %}) before making the change.

  -  [Dos](#dos)
  -  [Don'ts](#donts)


## Dos

### Update your packages frequently

Keep the packages on your VM up to date, especially the security related ones. An unpatched VM puts your data, and the University network, at risk.

On Ubuntu VM, run:

```bash
sudo apt-get update
sudo apt-get upgrade
```

On Red Hat VM, run:

```bash
sudo yum update
```

### Reboot the OS to apply the latest kernel

A newly installed kernel is only used after a reboot, so please reboot your VM after kernel updates. 
On Ubuntu, the file `/var/run/reboot-required` exists when a reboot is pending:

```bash
cat /var/run/reboot-required
```

Let the other users of the VM know beforehand, make sure no long running jobs are active, and then run:

```bash
sudo reboot
```

**Notice**: use `reboot`, not `shutdown` or `poweroff`. See [Don't shut off the VM](#dont-shut-off-the-vm) below.

### Clean up unused big files to free up space

A full disk can stop you from logging in and can break running jobs. Check the disk usage from time to time:

```bash
df -h
```

To find out what takes up the space in a directory, e.g. your home directory:

```bash
du -h --max-depth=1 ~ | sort -h
```

Typical candidates for a clean-up are old downloads and installers, intermediate results, unused conda environments and unused docker images. 
See also [Disk or partition is full]({{ site.baseurl }}{% link _doc/disk-full.md %}).

### Put your important data on a volume or network drive rather than the root disk

We keep the root disk small on purpose. It holds the operating system, and it may be replaced when the VM is rebuilt or upgraded. 
Keep your research data on an external data volume or on a network drive such as your research drive, so that it is safe from system failures.

- [Mount network drives to Linux VMs]({{ site.baseurl }}{% link _doc/mount-drive.md %})
- [How to increase CPU / RAM / disk of my VM]({{ site.baseurl }}{% link _doc/increase-resource.md %}), if you need a bigger data volume

### Back up your important data frequently

**We don't have automatic backup for research VMs.** If a file is deleted by mistake, or a disk fails, we can't restore it for you.

Copy your important data regularly to a place that is backed up, e.g. your research drive. For example, with a research drive mounted on `/mnt/research_drive`:

```bash
rsync -av /mnt/data/my_project/ /mnt/research_drive/my_project/
```

See also [How to copy files from/to a Linux VM]({{ site.baseurl }}{% link _doc/copy-file-linux.md %}).


## Don'ts

### Don't upgrade the operating system with do-release-upgrade

Please don't move your VM to a new release of the operating system, e.g. by running `do-release-upgrade` on Ubuntu. 
Newer operating systems might not be supported by our management and security tooling yet, and a failed release upgrade can leave the VM unusable.

Regular package updates (see [above](#update-your-packages-frequently)) are fine and encouraged. 
If you need a newer release of the operating system, please [contact us]({{ site.baseurl }}{% link contact.md %}).

### Don't add users to, or remove users from, the VM

User accounts and access to the VM are managed by us. Please don't run commands like `adduser`, `useradd`, `deluser` or `userdel`, and don't edit the related system files by hand. 
If someone needs access to your VM, or should no longer have it, please [contact us]({{ site.baseurl }}{% link contact.md %}).

### Don't change the firewall rules to allow ingress

Please don't change `iptables`, or other firewall rules (`ufw`, `firewalld`, `nftables`), to allow incoming connections. 
This might be insecure as it can expose your VM and your data. On top of that, the system automatically restores the original rules, so your change won't last.

If your research needs a service on the VM to be reachable from other machines, please [contact us]({{ site.baseurl }}{% link contact.md %}).

### Don't install unnecessary software

Please don't install software like an office suite or a web browser. A VM is not a replacement for your desktop computer. 
Every additional package takes up space on the small root disk, and needs to be kept up to date to stay secure.

Install only what your research needs, and remove software you no longer use.

### Don't shut off the VM

Please don't shut off the VM, e.g. with `sudo shutdown`, `sudo poweroff` or `sudo halt`. **You can't turn it back on by yourself**, and the VM stays unavailable for all its users until we start it again.

To restart the VM, use `sudo reboot` instead. If your VM has been shut off by mistake, please [contact us]({{ site.baseurl }}{% link contact.md %}).
