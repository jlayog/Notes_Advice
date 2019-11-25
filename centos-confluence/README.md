<h2 align="center">Setting up Confluence in CentOS 8</h2>

<p align="center">This is a step-by-step guide to setting up Confluence.</p>

### Step 1: Create a Confluence Service Account

```
  adduser [confluenceusr]
  passwd [confluenceusr]
  usermod -aG wheel [confluenceusr]
```
