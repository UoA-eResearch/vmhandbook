---
title:  "Data Transfer Using Globus"
categories:  storage howto drive
permalink: /drive/globus/
---

## Access
You can use globus (globus.org) to transfer data between your research drive and NeSI and other globus endpoints. [See here for documentation](https://support.nesi.org.nz/hc/en-gb/articles/360000576776-Data-Transfer-using-Globus).  
If you want your research drive accessible as a globus end point, please provide us with 
1. the name of your research drive  
2. the UPIs of those on your team who need this access.

## Performance

From https://portal.xsede.org/data-management:

>
Beyond the capabilities
of the network and storage systems involved, the single biggest factor
in your transfer performance will be the size of the files being
transferred, as there is time spent on the network setting up and
tearing down the connection for each file transfer, and for high
bandwidth networks like XSEDE this is relatively costly. For example,
going from file sizes of 10MB to 1GB can improve your average transfer
performance from a few MB/sec to over 1GB/sec. If you need to transfer
a large number of files you will get the best performance by first
bundling them into a single tar file and copying the single file.

## Archive (bundle) your files prior to transfer

```bash
cd <name_of_directory_containing_files>/..
tar czvf <bundle_name>.tar.gz <name_of_directory_containing_files>/
```
now transfer the file `<bundle_name>.tar.gz`

## Unpack your files after transfer

```bash
tar xzvf <bundle_name>.tar.gz  #extract into directory named <name_of_directory_containing_files>
```
