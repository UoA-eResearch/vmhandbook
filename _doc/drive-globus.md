---
title:  "Transfer data using Globus"
categories: howto drive
---

# Transfer data between a research drive and external endpoint

You can use Globus to transfer data between a research drive and other endpoints in New Zealand such as the REANNZ High Performance Computing platform. See a list of endpoints [here](https://docs.nesi.org.nz/Data_Transfer/Globus/Data_Transfer_using_Globus/#data-transfer-nodes-throughout-new-zealand).

For questions about transferring data from external providers with special requirements (such as Health NZ or other Government agencies), contact your [business relationship manager](https://www.auckland.ac.nz/en/intranet/services/a-z-service-teams/digital-services-brms.html).

# Transfer data between a Nectar virtual machine and external endpoint

You can use [GlobusConnectPersonal](https://www.globus.org/globus-connect-personal) to create a personal endpoint on a Nectar VM. See [here](./ntr-drive.html) for more information.

# Establishing Globus access to a University of Auckland Research Drive

If you have not previously used Globus with a Research Drive you need to [request access](https://forms.office.com/Pages/ResponsePage.aspx?id=lW6z0VAN6UKVj7Y_qQa-qsETxC2IIfJFk946yTnKPBRUMloxQVZINVI3NUZOODRMMDFIUDAzSENYUyQlQCN0PWcu) from the Centre for eResearch. 

Once you have Globus access to the Research Drive, log in to [Globus](https://www.globus.org/) via Single Sign On, and navigate to your research drive from "/home/\<your_upi\>", or "/~/" for short by searching the FileManager for "University of Auckland Research Data Collection".

>
![home_dir]({{ "/assets" | append: page.id | append: "/globus_home_dir.png" | absolute_url }}){:width=30%} \
or to "/~/": \
![tilde_home_dir]({{ "/assets" | append: page.id | append: "/globus_tilde_home_dir.png" | absolute_url }}){:width=30%}
>

# Transferring files

See the documentation at REANNZ for [transferring data on to the High Performance Computing platform](https://docs.nesi.org.nz/Data_Transfer/Globus/Data_Transfer_Using_Globus/).

See the documentation at Globus for [general file-transfer information](https://docs.globus.org/guides/tutorials/manage-files/transfer-files/)

# Transfer Errors

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

# Performance

Please read [Data Transfer Best Practices](https://docs.nesi.org.nz/Data_Transfer/Data_Transfer_Overview/) to maximise file transfer performance.