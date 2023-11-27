---
title:  "How to restore files from backup "
categories: windows linux admin user howto
---

## Backups

Your vm is incrementally backed up nightly, and fully backed up every week.
Three most-recent versions of files are made available to you.
The following links may be helpful:

* [Documentation for restoring from the command line](https://www.ibm.com/docs/en/tsm/7.1.0?topic=directories-examples-restoring-data-using-command-line)
* [Documentation for restoring from the gui](https://www.ibm.com/docs/en/tsm/7.1.0?topic=directories-restoring-data-using-gui)


If using the backup client gui, open the gui by searching for the string "bac" in the windows search-bar
![select image]({{ "/assets" | append: page.id | append: "/backup_client_restore.png" | absolute_url }}){:width="70%"}

### What versions are available

To see a list of file versions available for restoring within a given path, with their datestamps:

Linux

```bash
    dsmc restore "/home/<upi>/*" -inactive -pick
```

Windows operating systems Command line:

```cmd
    dsmc restore -inactive c:\id\projecta\ -pick
```

From the screen that opens, you can now pick versions you want restored by naming their ids.


