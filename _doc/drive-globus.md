---
title:  "Data Transfer Using Globus"
categories: howto drive
---

# Contents
  - [Research Drive Access](#access)
  - [Transfer Errors](#errors)
  - [Performance](#performance)
  - [Nectar](#nectar)

---

**NOTE**

* As of Dec 8, 2021, the NeSI data transfer node `NeSI Wellington DTN` has been deactivated,
* A new endpoint called `NeSI Wellington DTN V5` is available in its place.[^1]

---


## Research Drive Access
You can use globus (globus.org) to transfer data between your research drive and NeSI and other globus endpoints.
[See here for documentation](https://support.nesi.org.nz/hc/en-gb/articles/4409792460815-New-Globus-endpoint-makes-it-easier-to-transfer-large-data-sets-to-from-NeSI-HPC-Platform).


If you want your research drive accessible as a globus end point, please [open a servicenow request with us](https://eresearch-dashboard.auckland.ac.nz/service/research-storage/request), specifying "existing" storage, and providing
1. the name of your research drive
2. the usernames (UPI) of those on your team who need globus access to this drive


## Transfer Errors

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

### Archive (bundle) your files prior to transfer

```bash
cd <name_of_directory_containing_files>/..
tar czvf <bundle_name>.tar.gz <name_of_directory_containing_files>/
```
now transfer the file `<bundle_name>.tar.gz`

### Unpack your files after transfer

```bash
tar xzvf <bundle_name>.tar.gz  #extract into directory named <name_of_directory_containing_files>
```


   
## Nectar

Nectar vms are located, by default, outside the University of Auckland firewall, 
and your research drive is inside that firewall. <br/>
For that reason, you cannot currently mount your research drive on a nectar vm.

But the University operates a globus data-transfer node [Auckland Research Data DTN](https://support.nesi.org.nz/hc/en-gb/articles/360000931775)
outside the firewall giving you access to your research-drive from there.

In order to transfer files between your nectar instance and your research drive using globus, follow the following steps:


1. [request globus access to your research-drive from the Centre for eResearch](#access)
2. install a [globus personal endpoint](https://docs.globus.org/how-to/) on your nectar vm  (as per your operating system)
3. in your browser, sign in to [globus](globus.org) selecting the "existing organizational login" associated with University of Auckland.

4. Proceed to globus's [FileManager](https://app.globus.org/file-manager) page, and select
the two endpoints you want to connect:
* Auckland Research Data DTN:  once you authenticate, your research drive will be visible 
* your personal globus endpoint on your nectar vm


Now proceed to transfer files as you wish.

## Further Reading

* [further globus documentation](https://uoa-eresearch.github.io/vmhandbook/doc/drive-globus.html)
* [Personal Globus Endpoint Configuration](https://support.nesi.org.nz/hc/en-gb/articles/360000217915)

## Footnotes
[^1]: This is due to an [upgrade of the underlying endpoint software to Globus 5](https://support.nesi.org.nz/hc/en-gb/articles/4405623380751-Data-Transfer-using-Globus-V5).


