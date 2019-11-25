<h2 align="center">Setting up Confluence in CentOS 8</h2>

<p align="center">This is a step-by-step guide to setting up Confluence.</p>

### Step 1: Create a Confluence Service Account

```shell
  adduser <confluenceusr>
  passwd <confluenceusr>
  usermod -aG wheel <confluenceusr>
```

<hr>

### Step 2: Download Confluence

To get the latest release [atlassian.com/software/confluence/download-archives](https://www.atlassian.com/software/confluence/download-archives).  
Ensure that you use the latest Linux Installer (64-bit) version that ends in .bin  
At the time of writing this, I am using the **7.04 Linux Installer**  

```shell
 $ su confluenceusr
 $ cd ~
 $ sudo wget https://www.atlassian.com/software/confluence/downloads/binary/atlassian-confluence-[VERSION-NUMBER]-x64.bin
```

<hr>

### Step 3: Install Confluence Server 

First make the .bin executable and then install it. When finished installing, the installer will ask you if you want to launch Confluence. Enter **no**

```shell
  sudo chmod a+x atlassian-confluence-[VERSION]-x64.bin
  sudo ./atlassian-confluence-[VERSION]-x64.bin
```

<hr>

### Step 4: Open the required ports

```shell
  sudo firewall-cmd --zone=public --add-port=8090/tcp --permanent
  sudo firewall-cmd --zone=public --add-port=8000/tcp --permanent
  sudo firewall-cmd --reload
```

<hr>

### Step 5: Install MySQL

Ensure you download a compatible version of MySQL for the latest version of confluence installed. You can check against a list of all supported platforms at [https://confluence.atlassian.com/doc/supported-platforms-207488198.html](https://confluence.atlassian.com/doc/supported-platforms-207488198.html)

```shell
  wget https://dev.mysql.com/get/mysql57-community-release-el7-9.noarch.rpm
  sudo rpm -ivh mysql57-community-release-el7-9.noarch.rpm
  sudo yum install mysql-server
  sudo systemctl start mysqld
```

<hr>

### Step 6: Secure MySQL

```shell
  sudo mysql_secure_installation
```

<hr>

### Step 7: Configure MySQL

```shell
  sudo nano /etc/my.cnf

  # add the lines below to the file make sure there are no duplicates
  character-set-server=utf8
  collation-server=utf8_bin
  default-storage-engine=INNODB
  max_allowed_packet=256M
  innodb_log_file_size=2GB
  transaction-isolation=READ-COMMITTED
  binlog_format=row


  # remove this if it exists
  sql_mode = NO_AUTO_VALUE_ON_ZERO
```
```shell
  service mysqld restart
```  

<hr>

### Step 8: Setup MySQL Database

```shell
  sudo mysql -u <confluenceusr> -p
```

```sql
  CREATE DATABASE <database-name> CHARACTER SET utf8 COLLATE utf8_bin;
  GRANT ALL PRIVILEGES ON <database-name>.* TO '<confluenceusr>'@'localhost';
  EXIT
```

### Step 9: Install MySQL driver 
Download the MySQL driver for Confluence then copy the .bin.jar file to the Confluence install directory.  
**NOTE**: *Make sure that the MySQL driver is compatible with your version of Confluence.*

```shell
  wget https://dev.mysql.com/get/Downloads/Connector-J/mysql-connector-java-5.1.46.zip
  sudo unzip mysql-connector-java-5.1.46.zip -d mysql-connector
  sudo cp mysql-connector/mysql-connector-java-5.1.46/mysql-connector-java-5.1.46-bin.jar /opt/atlassian/confluence/confluence/WEB-INF/lib
``` 

Restart Confluence.

<hr>

### Step 10: Finished
Congrats, you have now set up Confluence at http://<your-server-ip/name>:8090 and run through the initial configuration and connect you to MySQL databse.

You can also start confluence by typing:
```shell
  sudo /etc/init.d/confluence start
```

