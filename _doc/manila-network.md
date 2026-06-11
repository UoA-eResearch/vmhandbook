---
title:  "My auckland-data network used to access the file share is gone"
categories: nectar howto
---

We used to offer two default networks for VMs in the auckland zone: `auckland-public-data` and `auckland-public`. The first one was dedicated used to access the file share, while the second one was used for general access.

![useful image]({{ "/assets" | append: page.id | append: "/network.png" | absolute_url }}){:width="50%"}

Since 2026, we have removed the `auckland-public-data` network and all newly launched VMs in the auckland zone are now connected to the `auckland-public` network. This means that you can not access the file share from your VM, unless your VM is connected to the `auckland-public-data` network.

At the moment, users are not able to add the `auckland-public-data` network themselves. If you need to access the file share, please contact Nectar Support and we will help you with this.
