
---
title:  "account configuration of Windows VMs in Auckland cluster"
---

## Notice

Before you can use the Windows VM, you need to set a password for the administrator account configured for your Nectar use:  "res-admin".

Browse to *Project > Compute > Instances* panel, and click on your instance. In the instance detail page, click *Console* tab. You'll see a welcome screen like this:

To begin the login proces, click on the *Send CtrlAltDel* button on the top right corner.

![res-admin account]({{ "/assets" | append: page.id | append: "/step0.png" | absolute_url }}){:width="70%"}

Select the user "res-admin" to sign in. 

![res-admin account]({{ "/assets" | append: page.id | append: "/step1.png" | absolute_url }}){:width="70%"}

you must now change the associated password:

![res-admin account]({{ "/assets" | append: page.id | append: "/step2.png" | absolute_url }}){:width="70%"}


Your password needs to meet the requirements of 
https://learn.microsoft.com/en-us/windows/security/threat-protection/security-policy-settings/password-must-meet-complexity-requirements:

* at least eight characters
* at least one of each class
  * alphabetical characters
  * numeric characters
  * special characters
* does not contain the username

![res-admin account]({{ "/assets" | append: page.id | append: "/step3.png" | absolute_url }}){:width="70%"}



