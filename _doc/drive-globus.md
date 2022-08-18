---
title:  "Data Transfer Using Globus"
categories: howto drive
---


---

**NOTE**

* As of Dec 8, 2021, the NeSI data transfer node `NeSI Wellington DTN` has been deactivated,
* A new endpoint called `NeSI Wellington DTN V5` is available in its place.[^1]

---


## Access
You can use globus (globus.org) to transfer data between your research drive and NeSI and other globus endpoints.
[See here for documentation](https://support.nesi.org.nz/hc/en-gb/articles/4409792460815-New-Globus-endpoint-makes-it-easier-to-transfer-large-data-sets-to-from-NeSI-HPC-Platform).


If you want your research drive accessible as a globus end point, please provide us with
1. the name of your research drive
2. the UPIs of those on your team who need this access.

## Transferring data to/from Nectar


Nectar vms are currently located exclusively outside the University of Auckland firewall, 
and your research drive is inside that firewall.
For that reason, you cannot currently mount your research drive on a nectar vm.

But the University operates a globus data-transfer node ["Auckland Research Data DTN"](https://support.nesi.org.nz/hc/en-gb/articles/360000931775)
outside the firewall giving you access to your research-drive from there.

In order to transfer files between your nectar instance and your research drive using globus:

#.  request access from the Centre for eResearch for globus access to your research drive:
provide your username and the research-drive name.

#. install a [globus personal endpoint](https://docs.globus.org/how-to/).
#. In your browser, sign in to [globus](globus.org) 
selecting the "existing organizational login" associated with University of Auckland.
Further information at [Personal Globus Endpoint Configuration](https://support.nesi.org.nz/hc/en-gb/articles/360000217915)

Then proceed to globus's FileManager page, and select
the two  endpoints you want to connect:
1) your research drive 
2) your personal globus endpoint

[further globus documentation](https://uoa-eresearch.github.io/vmhandbook/doc/drive-globus.html]

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

### Errors

You can inspect the logs for your globus transfers from the console
in globus:

1.  Select the Activity tab on the LHS of the globus
page and then select the job that you want to investigate. ![useful
image]({{ "/assets" | append: page.id | append: "/globus_activity.png"
| absolute_url }}){:width="900px"}

2. Select the Event Log tab
(highlighted) and view the Fault Events for that job.  You may be able
to see the problem with your transfer here.  If this raises issues you
can't control, please get in touch with Centre for eResearch. ![useful
image]({{ "/assets" | append: page.id | append: "/globus_error_logs.png"
| absolute_url }}){:width="900px"}

[^1]: Due to an [upgrade of the underlying endpoint software to Globus 5](https://support.nesi.org.nz/hc/en-gb/articles/4405623380751-Data-Transfer-using-Globus-V5).
