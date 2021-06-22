---
title:  "Research Drive Storage Constraints"
categories: drive
---

A research drive storage folder has sub-folders `Vault` and `Archive`.
Your allocation quota is effectively attributed to the *complement* of these two folders, i.e. 
to everything that is not stored there.


Storage Costs to the University
(covering one-time setup and ongoing backup)

|Filesystem |Vault (Object-Store)  | Archive (Tape)|
|--- | --- | ---|
|$4/GB|40c/GB|4c/GB|


* Any data not in either Vault or Archive is stored on the filesystem.
* Access to tape is slowest, access to vault slower than to file-system.
* Data moved to  `Vault` and `Archive` are *periodically* moved to object-store and to tape respectively.  By periodically, we mean *nightly* - but our reporting from Connect, which handles this migration, is not precise.
* Until data on the filesystem are moved to object-store or tape, that data is counted as part of your allocation quota.  After that time, that data is not counted as part of your allocation quota.

Your *current use* of any of your data should determine where you store it in your research drive storage folder.
Please be mindful that research storage is a finite resource. 

We ask you to request only what you need, and to store it keeping in mind that you are using a shared resource, 
