---
title:  "Disk or partition is full"
categories: windows linux admin user tshoot nectar
---



  -  [ Move docker from system drive](#move docker from system drive)
  -  [ Move anaconda from system drive](#move anaconda from system drive)

We keep the system drive small to encourage you to work on your external drive.
Keeping system files on a different drive than your data is good practice:  your
data is kept safe from system failures, and system re-installation is simple.

If your system drive is getting full, please start by moving any research data and
environments to your external data volumme.
If you are running docker or anaconda, you are strongly encouraged to move them to your external volume, as outlined below.


## Move Docker from system drive  

### Linux

If you have:

* an external drive named `/dev/vdb1` mounted, say, on `/mnt/data`  (your drive names may vary)
* it is configured to mount on boot (there is an entry for this drive in /etc/fstab),  
* it has about 40GB free, 

try the following:

```bash 
$ docker ps (to see running docker processes)
$ (sudo stop docker processes)
$ sudo systemctl stop docker
$ mkdir -p /mnt/data/docker
$ sudo rsync -azv /var/lib/docker/*  /mnt/data/docker/
$ sudo mv /var/lib/docker /var/lib/docker.old
$ sudo ln -s /mnt/data/docker /var/lib/docker
$ sudo systemctl start docker
$ (start docker process)  (same processes as you stopped at the first step)
```

If everything works as expected, 

``` bash
$ sudo rm -rf /var/lib/docker.old
```


## Move anaconda from system drive

See https://www.anaconda.com/blog/moving-conda-environments

