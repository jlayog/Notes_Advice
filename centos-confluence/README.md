<h2 align="center">Setting up Confluence in CentOS 8</h2>

<p align="center">This is a step-by-step guide to setting up Confluence.</p>

### Step 1: Create a Confluence Service Account

```
  adduser [confluenceusr]
  passwd [confluenceusr]
  usermod -aG wheel [confluenceusr]
```

<hr>

### Step 2: Download Confluence

To get the latest release [atlassian.com/software/confluence/download-archives](https://www.atlassian.com/software/confluence/download-archives).  
Ensure that you use the latest Linux Installer (64-bit) version that ends in .bin  
At the time of writing this, I am using the **7.04 Linux Installer**  

```
  su confluenceusr
  cd ~
  sudo wget https://www.atlassian.com/software/confluence/downloads/binary/atlassian-confluence-[VERSION-NUMBER]-x64.bin
```
