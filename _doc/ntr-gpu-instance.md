---
title:  "How to launch and use a GPU instance in Auckland cluster"
categories: nectar howto
---

**Note**: GPU is NOT available for all Nectar projects. You have to reserve it first. This article is only applicable for the approved Nectar GPU projects. For more information about GPU and machine learning resources available for UoA researchers, please refer to [Machine Learning Service](https://research-hub.auckland.ac.nz/#/content/28) on Research Hub.


## The GPU reservation system

Before you can launch a GPU instance, you must reserve a GPU first. Login to this website with your university credential

[Centre for eResearch - GPU Reservation](https://portal.cer.auckland.ac.nz/gpu)

, and you'll see the current availability of all GPUs.

![useful image]({{ "/assets" | append: page.id | append: "/reservation.png" | absolute_url }}){:width="60%"}

Follow the instructions to reserve your GPU instance. If your reservation is successful, you'll receive an email, like this one:  

![useful image]({{ "/assets" | append: page.id | append: "/email.png" | absolute_url }}){:width="60%"}

You can follow the link inside the email to read the instructions on how to launch a GPU instance. 

## Renew your reservation

We your reservation is approaching to the end date (normally 2 weeks before), you'll receive another email asking you to renew. You can follow the instructions to renew your reservation, if nobody has reserved your GPU. You won't be able to see the renew button until you receive the email. That is, you can not renew your reservation in advance.

![useful image]({{ "/assets" | append: page.id | append: "/email2.png" | absolute_url }}){:width="60%"}


## GPU reservation v.s. Nectar allocation


There are two separate life cycles: Nectar project allocation lifecycle, and the GPU reservation lifecycle. The nectar project allocation allows you to use nectar services, including VM (without GPU), storage, database, etc. and the GPU reservation allows you to launch a nectar VM with GPU. Since the GPU reservation is built on top of Nectar project allocation, the GPU reservation lifecycle must be within the Nectar project lifecycle.


The nectar project allocation lifecycle is managed via the [Nectar dashboard](https://dashboard.rc.nectar.org.au/), and the GPU reservation lifecycle is managed by the [CeR reservation portal](https://portal.cer.auckland.ac.nz/gpu), In order to use a GPU VM on Nectar, you need both. So firstly you must ensure you have a valid nectar project allocation, and then, you reserve a GPU reservation to enable GPU usage. What you see on CeR reservation portal is the life cycle of your GPU reservation, not your project allocation. If your GPU reservation expires, your GPU VMs will be deleted, but you can still launch normal Nectar VMs, without GPUs. 


<!--- Jason: comment out the old stuff

**Note**: GPU is NOT available for all Nectar projects. You have to request it first. This article is only applicable for the approved Nectar GPU projects. For more information about GPU and machine learning resources available for UoA researchers, please refer to [Machine Learning Service](https://research-hub.auckland.ac.nz/#/content/28) on Research Hub.


## Launch a GPU instance

Login to [Nectar Dashboard](https://dashboard.rc.nectar.org.au/) via Tuakiri. Browse to *Project > Compute > Images* as shown in the picture below, and enter `UoA-GPU` in the search box. You will find the prebuilt images for GPU instances. The image is built upon Ubuntu 18.04 and has lots of useful tools pre-installed, such as the NVIDIA drivers, CUDA, Anaconda, and TensorFlow. If you have an approved GPU project and can not find an image, please contact us.

![useful image]({{ "/assets" | append: page.id | append: "/step1-image.png" | absolute_url }}){:width="60%"}

If there are multiple images, please always choose the latest one, and click the "Launch" button to start the new instance wizard.

In the *Details* tab, please select `auckland` from the *Availability Zone* dropdown box.

![useful image]({{ "/assets" | append: page.id | append: "/step2-az.png" | absolute_url }}){:width="60%"}

In the *Flavour* tab, please enter `akl.gpu` in the filter box, and select the corresponding GPU flavour that your project has been granted to.

![useful image]({{ "/assets" | append: page.id | append: "/step3-flavour.png" | absolute_url }}){:width="60%"}

In the *Security Groups* tab, please make sure you've enabled SSH (port 22) ingress. 

Click the "Launch" button, and go to *Project > Compute > Instances* panel, wait until the status of your new instance is **Active**. It might take 2-10 minutes, depending on the size of your VM. 

For more information about other VM launching options, security groups, and keys, please refer to the following Nectar tutorials:

- [Launching Virtual Machines](https://tutorials.rc.nectar.org.au/launching-virtual-machines/01-overview)
- [Security groups, the absolute basics](https://tutorials.rc.nectar.org.au/sec-groups-101/01-overview)
- [Intermediate Security Groups](https://tutorials.rc.nectar.org.au/intermediate-security-groups/01-overview)


## Access command line via SSH

You can follow this tutorial to connect your instance via SSH.

[Access using SSH and web-based VNC](https://tutorials.rc.nectar.org.au/connecting/02-terminal-and-ssh)

After you've logged in, please run `lspci | grep NV` to check if you can see your GPU in the VM. For example, a VM with K20 GPU should see something like this:

```bash
(base) ubuntu@mygpuinstance:~$ lspci | grep NV
00:06.0 3D controller: NVIDIA Corporation GK110GL [Tesla K20Xm] (rev a1)
```

## Access graphical interface via x2go

You can also access the GUI of the GPU instance via x2go client. Please follow [this article](https://wiki.x2go.org/doku.php/doc:installation:x2goclient){:target="_blank"} to install x2go client.

In x2go client, create a new session, and make sure the following items are correctly configured:
- **Host**: the IP address of your VM.
- **Login**: enter `ubuntu`.
- **SSH port**: enter `22`.
- **Use RSA/DSA key for ssh connection**: enter the path of your private key.
- **Session type**: select `MATE` from the dropdown menu.

![useful image]({{ "/assets" | append: page.id | append: "/step4-x2go.png" | absolute_url }}){:width="50%"}

Then, connect with the new session, you should be able to see the graphical user interface of you GPU VM.

--->