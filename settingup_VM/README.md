<h2 align="center">Setting up Ubuntu 18.04 in Oracle Virtual Box with Windows</h2>

<p>This is a personal guide to setting up a VM, for easily discardable development environments.</p>

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

Once you've checked that the details are similar to yours from the image above, click '**Settings**'.

You're going to want the following options so that your VM runs smoothly, to which I'll try and explain why:  

- **Display**
    - `Video Memory`: **128 MB**
    
- **Storage**
    - `Controller: IDE` --> `Empty`: On the right you should see a little blue disc, click that and it will give you the option to '**Choose Virtual Optical Disk File**'.  
    - You should find the Ubuntu live server that you have downloaded in the beginning (**ubuntu-18.04.3-live-server-amd64.iso**) and open that file.  

- **Network**
    - `Adapter 1`: This adapter is currently whatever your machine is using as a network for internet. 
    - `Adapter 2`: For locking down purposes, we're going to **Enable Network Adapter**. Then select the dropdown **Attached to:** --> **Host-only adapter**. This is so your virtual machine can use your *real* machine's network for internet connection.

Click '**OK**' and you should now have your VM ready to go.

<hr>

Now you can click '**Start**' and your VM should start up and prompt you in configuring the Ubuntu system! 

Hopefully this was helpful, and feedback is welcome :)
