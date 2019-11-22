<h2 align="center">Setting up Oracle Virtual Box with Windows</h2>

<p>This is a personal guide to setting up a VM, port security, for easily discardable development environments.</p>

### What resources you will need to install:

- [Oracle VM VirtualBox](https://www.virtualbox.org/wiki/Downloads)
    - Personally, this is what I was taught with, so it is what we will be using.
    - **NOTE:** Make sure that you have Hyper-V disabled, otherwise the VM will not load upon boot. Not always the case, but it happens.
- [Ubuntu Server 18.04 LTS](https://ubuntu.com/#download)
    - LTS due to some incompatibility and some bugs in the latest version.
    
<hr>

#### Step 1: 
<p>Upon VirtualBox startup, you should be given the option to create a virtual machine.</p>
    - click **New**.
        <img src="https://github.com/jlayog/Notes_Advice/blob/master/settingup_VM/images/newVM.PNG">
    - You will then be prompted with another box.
        <p>From here you have the option to **Name** your Virtual Machine. It can be whatever you want, for me, I will be naming it `devbox`.</p>
        <p>The **Machine Folder** option should already have a path filled out for you, from when you installed VirtualBox</p>
        <p>For **Type**, we will go with **Linux**, and **Version** --> **Ubuntu (64-bit)**.</p>
        
