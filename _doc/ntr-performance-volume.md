---
title:  "How to Use Nectar Performance Volume"
categories: nectar howto
---

## Introduction

Nectar Auckland node now provides a new type of block storage called "Performance Volume". Performance Volumes are backed by high-performance storage hardware (NVME SSDs)and offer improved performance compared to standard volumes. This type of volume is designed for workloads that require high IOPS and low latency, such as:
- Databases
- Big data analytics
- High-performance computing applications

The performance volume type is NOT by default available, because of the additional costs and limited capacity. If your research workload requires high-performance storage, you can request a Performance Volume quota and use it in your Nectar instances. This article will guide you through the process of requesting a Performance Volume quota and converting an existing volume to a Performance Volume.

## Request Performance Volume for Your Allocation

If your allocation does not have a Performance Volume quota, you can request one by following these steps:

1. Amend your allocation by following [This Tutorial](https://tutorials.rc.nectar.org.au/allocation-management/05-amending-extending)
2. In Step 2 "Cloud Resources", scroll down to "2. Location Specifics Resources" and enter the amount of quota you need for "Auckland (NZ) performance Storage" in GB. For example, if you need 100GB of Performance Volume, enter "100" in the input box.
3. Complete the rest of the form and submit your amendment request. The Nectar Ops team will review your request and grant the Performance Volume quota if approved.

![allocation]({{ "/assets" | append: page.id | append: "/allocation.png" | absolute_url }}){:width="80%"}

Once you have the Performance Volume quota, you can create a new Performance Volume or convert an existing standard volume to a Performance Volume.

## Create a New Performance Volume


![create]({{ "/assets" | append: page.id | append: "/create.png" | absolute_url }}){:width="80%"}


## Convert Existing Volume to Performance Volume

