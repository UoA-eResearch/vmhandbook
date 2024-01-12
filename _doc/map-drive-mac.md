---
title:  "Map network drives to a Mac"
categories: mac howto drive
---

Network drives include your Unifiles home folder, Unifiles research drives and other network file systems that start with `//machine_name`.
Mapping a is the process by which your computer is directed to the location of the network drive, so that it can display the contents of the research drive like any other folder on your computer.
This tutorial will mount your Unifiles home folder `//files.auckland.ac.nz/research/myhome` on a Mac.

To mount a research drive, you need to use `//files.auckland.ac.nz/research/YOUR_DRIVE_NAME`, where YOUR_DRIVE_NAME needs to be replaced by the name of your research drive (research drive names look similar to this: rescer201800002-cer-researchfolder-test).

If you want to mount some other location, e.g. a faculty drive, you'll need to change the path according to your requirements.
You need to activate...
1. Open **Finder** and select **Go** on the menu bar.

2. Click the **Connect to Server** (shortcut (⌘K))

3. In the Server Address field, enter `smb://files.auckland.ac.nz/research/myhome`

4. Click + to add the server address to Favourite Servers section for later user.

5. Enter your user name and password and click connect to your network drive.

6. When you connect to the network drive, it will mount on the desktop.

If you want to create an alias, please follow these additional steps:

1. Press shortcut (⌘L) on the Network drive or right click it and choose "Make Alias".

2. Rename the Alias using the name you would like, like P drive or U drive.
