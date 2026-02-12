

<ZZ quote>
Whilst a file exists on the machine that is being backed up through TSM three (3) versions will be retained:

A new version 1 (most recent backup) is created and stored after creation of a file or modification of a file

The existing version 1 (if it exists) becomes the new version 2
The existing version 2 (if it exists) becomes the new version 3
The existing version 3 (if it exists) will be expired

Whilst a file exists on the machine that is being backed up through TSM, its versions will be retained for:

Version 1 backup copy will always be available
Version 2 will expire 30 days after becoming version 2
Version 3 will be expired 30 days after becoming version 3

When a file is deleted from the machine that is being backed up through TSM it will be retained for:

Version 1 (the most recent) will be retained for 180 days
Version 2 (if it exists) will be retained for 30 days
Version 3 (if it exists) will be expired

</quote>
