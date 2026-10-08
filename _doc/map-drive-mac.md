---
title:  "Connect to a Research Drive on a Mac computer"
categories: mac howto drive
---

1. If you are **off-campus** connect via the University [Virtual Private Network](https://www.auckland.ac.nz/en/students/academic-information/postgraduate-students/postgraduate/postgraduate-support-and-services/vpn-service.html) (VPN). 

2. Click on the **Finder** icon, press command ⌘ + K to bring up the **Connect to Server** window. 

3. In the Server Address field, 
    <span id="defaultEnterMessage">enter the drive location you were sent when the drive was created:</span>
    <span id="personalisedEnterMessage" style="display:none;">enter this drive location:</span>

    <div id="defaultPathInfo">
    <p>a. For drives created after mid-September 2026, enter <code class="language-plaintext highlighter-rouge">smb://research.drive.auckland.ac.nz/</code> followed by the name of the Research Drive. It will look similar to this:
    <code class="language-plaintext highlighter-rouge">smb://research.drive.auckland.ac.nz/ressci202400035-drive-name</code></p>

    <p>OR</p>

    <p>b. For drives created before mid-September 2026, enter <code class="language-plaintext highlighter-rouge">smb://files.auckland.ac.nz/research/</code> followed by the name of the Research Drive. It will look similar to this:
    <code class="language-plaintext highlighter-rouge">smb://files.auckland.ac.nz/research/ressci202400035-drive-name</code></p>
    </div>
    <pre style="display:none" id="personalisedPathInfo"></pre>

4. Click **+** to add the Research Drive location to **Favourite Servers** 

5. Click **Connect**. 

![useful image]({{ "/assets" | append: page.id | append: "/map-mac-drive.png" | absolute_url }}){:width="600px"}

If prompted, enter your University username and password ensuring the Domain is UOA.

![useful image]({{ "/assets" | append: page.id | append: "/map-mac-drive-username.png" | absolute_url }}){:width="600px"}

<script src='{{"/assets/doc/personalised-instructions.js" | relative_url}}'></script>
<script>initPersonalisedInstructions("mac")</script>