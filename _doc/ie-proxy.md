---
title:  "Set up Internet connection for browsers via the UoA proxy server"
categories: windows admin user howto
---

For security reasons Windows VMs by default don't have access to the Internet. To set up Internet access follow the next steps to configure the proxy server:

1. On the **Tools** menu in Internet Explorer (little cog close to the top right corner of the IE window), click **Internet Options**, click the **Connections** tab, and then click **LAN Settings**.

    ![useful image]({{ "/assets" | append: page.id | append: "/screenshot1.png" | absolute_url }}){:width="600px"}

    ![useful image]({{ "/assets" | append: page.id | append: "/screenshot2.png" | absolute_url }}){:width="600px"}

2. Under **Proxy server**, click to select the **Use a proxy server for your LAN** check box.
3. In the **Address** box, type `squid.auckland.ac.nz`.
4. In the **Port** box, type `3128`.
5. You can click to select the **Bypass proxy server for local addresses** check box if you do not want the proxy server computer to be used when you connect to a computer on the local network (this may speed up performance). If you need to bypass the proxy server for other connections, click on **Advanced** where you configured the proxy server and add the address to the list of **Exceptions**.

    ![useful image]({{ "/assets" | append: page.id | append: "/screenshot3.png" | absolute_url }}){:width="600px"}

6. Click **OK** to close the **LAN Settings** dialog box.
7. Click **OK** again to close the **Internet Options** dialog box.


Note:

- This is not a system-wide setting, but needs to be done by every user of the VM that needs access to the Internet.
- Note that the proxy server is not a full production service and may have downtimes. This solution has worked very well in the past, and it's a good solution if you need occasional Internet access to e.g. install software packages. If you need reliable Internet access on a regular basis please contact research-vm@auckland.ac.nz.
- If you need Internet access for other tools than your browser, e.g. for pip to install Python packages, or for R to install R packages from repositories outside the University network, please contact research-vm@auckland.ac.nz.

