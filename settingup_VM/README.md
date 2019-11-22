<h2 align="center">Setting up Oracle Virtual Box with Windows</h2>

<p>This is a personal guide to setting up a VM, port security, for easily discardable development environments.</p>

### What resources you will need to install:

- [Oracle VM VirtualBox](https://www.virtualbox.org/wiki/Downloads)
    - Personally, this is what I was taught with, so it is what we will be using. Click on **Windows hosts** and a download should begin.
    - Upon writing this, I am currently using **v6.0.14-133895**
    - **NOTE:** Make sure that you have Hyper-V disabled, otherwise the VM will not load upon boot. Not always the case, but it happens.
- [Ubuntu Server 18.04 LTS](https://ubuntu.com/#download)
    - LTS due to some incompatibility and some bugs in the latest version.
    
<hr>

### Step 1: Initial Setup
Upon VirtualBox startup, you should be given the option to create a virtual machine.
- click '**New**'.  

    <img src="https://github.com/jlayog/Notes_Advice/blob/master/settingup_VM/images/newVM.PNG">  
    
- You will then be prompted with another box.

    <img src="https://github.com/jlayog/Notes_Advice/blob/master/settingup_VM/images/vmWindowOpen.PNG?raw=true">

From here you have the option to **Name** your Virtual Machine. It can be whatever you want, for me, I will be naming it `devbox`.
        
- The **Machine Folder** option should already have a path filled out for you, from when you installed VirtualBox</p>

- For **Type**, we will go with '**Linux**', and **Version** --> '**Ubuntu (64-bit)**'.

Now we can hit '**Next**'.

#### Memory Size

Honestly, you can leave it as is, but to make sure there aren't any hang-ups, I will set the amount of memory to **4096** MB.

#### Hard Disk

It will now ask you the option of either not adding a virtual hard disk, creating a virtual hard disk, or use an existing virtual hard disk. If freshly installed, you shouldn't have the option of using an existing one.

Go ahead and click '**Create a virtual hard disk now**'.

##### Choose the following options:  
- '**VDI (Virtual Disk Image)**'  
- '**Dyanmically allocated**'  
- When arriving to file location, don't alter anything unless you want it in a different location.
- '**Set virtual hard disk size to 40.00GB**' (just to be safe)
- Now click '**Create**'

Congrats, you have just made 1 instance of a virtual machine. Hold your horses, as we aren't done yet.

<hr>

### Step 2: VM Settings

With your virtual machine selected, you should be able to see the details of your virtual machine:

<img src="https://github.com/jlayog/Notes_Advice/blob/master/settingup_VM/images/vmDetails.PNG?raw=true">

