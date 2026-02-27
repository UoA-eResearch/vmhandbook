---
title:  "Data Transfer Using Globus"
categories: howto drive
---

# Contents
  - [Globus Research Drive Access](#globus-research-drive-access)
  - [Transfer Errors](#transfer-errors)
  - [Endpoint management](#endpoint-management)
  - [Performance](#performance)



## Transfer data between UoA and other NZ locations

* You can use [globus](http://globus.org) to transfer data between your research drive and 
<a href="https://docs.nesi.org.nz/Data_Transfer/Globus/Data_Transfer_using_Globus/#data-transfer-nodes-throughout-new-zealand">NeSI and other associated NZ public globus endpoints</a>

* [NeSI: General globus introduction](https://docs.nesi.org.nz/Data_Transfer/Globus/Globus_Overview/)
* [NeSI: globus transfers](https://docs.nesi.org.nz/Data_Transfer/Globus/Data_Transfer_using_Globus/)

## Transfer data between an institutional globus endpoint and your workstation

* Using [GlobusConnectPersonal](https://www.globus.org/globus-connect-personal), you can create a personal endpoint on your workstation or Nectar vm,
<a href="https://docs.nesi.org.nz/Data_Transfer/Globus/Add_Your_Computer_To_Globus/"> add your computer to globus</a>

and transfer data between
that endpoint and any NZ institutional endpoint in exactly the same way: [Nectar vm data-transfers](./ntr-drive.html)


## University of Auckland Research Drive Access

If you have not previously transferred files to or from a University of Auckland Globus endpoint,
you need to request access from Centre for eResearch.  Please 
[submit globus access to your research-drive](https://forms.office.com/Pages/ResponsePage.aspx?id=lW6z0VAN6UKVj7Y_qQa-qsETxC2IIfJFk946yTnKPBRUMloxQVZINVI3NUZOODRMMDFIUDAzSENYUyQlQCN0PWcu)

Access your research drive on the Data Transfer Node (DTN) either by using the 
link   [University of Auckland Research Data Collection](https://app.globus.org/file-manager?origin_id=844ba90c-1d37-4480-8263-a206ebd9f4f3) or .
searching the FileManager for the collection "University of Auckland Research Data Collection".

Once you have logged in (UoA Single-Sign-On), navigate to your research drive from "/home/\<your_upi\>", or "/~/" for short.
>
![home_dir]({{ "/assets" | append: page.id | append: "/globus_home_dir.png" | absolute_url }}){:width=30%} \
or to "/~/": \
![tilde_home_dir]({{ "/assets" | append: page.id | append: "/globus_tilde_home_dir.png" | absolute_url }}){:width=30%}
>


## File-transfer documentation

Very good documentation at [File transfer](https://docs.nesi.org.nz/Data_Transfer/Data_Transfer_Overview/)

See also [globus file-transfer documentation](https://docs.globus.org/guides/tutorials/manage-files/transfer-files/)


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

Please read [Data Transfer Best Practices](https://docs.nesi.org.nz/Data_Transfer/Data_Transfer_Overview/)

## Data Transfer between two personal globus endpoints

[Transferring files between two computers](https://docs.nesi.org.nz/Data_Transfer/Globus/Data_Transfer_Between_Personal_Endpoints/)


## Further Reading

* [further globus documentation](https://docs.nesi.org.nz/Data_Transfer/Globus/Globus_Overview/)

