---
title:  "Set up Internet connection via the UoA proxy server"
categories: windows admin user howto
---

For security reasons Windows VMs by default don't have access to the Internet. To set up Internet access follow the next steps to configure the proxy server:

1. Search for **proxy** in the Windows Search, and open **Network Proxy Settings**
2. Under **Manual proxy setup** turn on **Use a proxy server**
3. In the **Address** box, type `squid.auckland.ac.nz`.
4. In the **Port** box, type `3128`.
5. You can click to select the **Don't use the proxy server for local addresses** check box if you do not want the proxy server computer to be used when you connect to a computer on the local network (this may speed up performance). If you need to bypass the proxy server for other connections, click on **Advanced** where you configured the proxy server and add the address to the list of **Exceptions**.

![useful image]({{ "/assets" | append: page.id | append: "/proxy_configuration_windows.png" | absolute_url }}){:width="1024"}


Note:

- This is not a system-wide setting, but needs to be done by every user of the VM that needs access to the Internet.
- Note that the proxy server is not a full production service and may have downtimes. This solution has worked very well in the past, and it's a good solution if you need occasional Internet access to e.g. install software packages. If you need reliable Internet access on a regular basis please contact research-vm@auckland.ac.nz.
- If you need Internet access for other tools than your browser, e.g. for pip to install Python packages, or for R to install R packages from repositories outside the University network, please contact research-vm@auckland.ac.nz.  

### A Second Method
The above method should work for most software (including web browsers). However, if you find that some software still does not have internet access, you may try the following:
1. Search for **cmd** in the Windows Search, which should make **Command Prompt** visible in the search results (don't open Command Prompt yet).
2. Right-click on **Command Prompt** and click **Run as administrator**.  
![useful image]({{ "/assets" | append: page.id | append: "/cmd_admin_cropped.png" | absolute_url }}){:width="512"}
3. In command prompt, type `netsh winhttp set proxy http://squid.auckland.ac.nz:3128`, and press enter
![useful image]({{ "/assets" | append: page.id | append: "/cmd_netsh.png" | absolute_url }}){:width="1024"}

Note:
- You can only run this command if you are an admin on the VM.
- Unlike the first method, this method will change settings for all users.
- This method will not work for all applications, but it will fix many applications that cannot access the internet after applying the first method.