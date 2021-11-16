After upgrading to an SSD, one issue observed is that the system still freezes or lags on occassion. This can be due to various reasons, but one common issue observed is that the SWAP file on Ubuntu has very small space allocation, default at around 2GB, so despite the SSD the OS is unable to fully utilize the SSD as the swap space allocation is too small. To rectify this issue, swap file needs to be modified on Ubuntu. To do this, the following Steps should be followed. These steps are based on the solution available at [askubuntu](https://askubuntu.com/questions/178712/how-to-increase-swap-space).

## Step 1: Check swapfile location

In order to replace the swap file firstly find the exact location of the swap file, to find this run the following command.

```
sudo cat /etc/fstab | grep swap
```

The output of this command will show the path of the file, in this case the result was:

```
/swapfile                                 none            swap    sw              0       0
```

This indicates that the swap file is located in the root directory of the installation as indicated by the `/swapfile` text at the beginning of the output line. To verify this, you can navigate to the location of this file and run the command
`sudo ls / -al | grep swapfile`
You can substitute the `/` in the command for the directory where your swapfile is located based on the output of the command you saw above. This command presents the ouput below for me which means that the swapfile does exist at this location.

```
-rw-------   1 root root 2147483648 Oct 11 19:07 swapfile
```

## Step 2: Create the swapfile

Now we need to create the swapfile that we want to replace our existing swapfile with, to do this run the following command

```
sudo dd if=/dev/zero of=/swapfile1.img bs=1024 count=4M
```

This command might take sometime to run depending upon the size of the file that you are creating.
At the end of the command and output similar to the one indicated below should be seen.

```
4194304+0 records in
4194304+0 records out
4294967296 bytes (4.3 GB, 4.0 GiB) copied, 27.3487 s, 157 MB/s
```

_Note_:

1. In the `of` block in the command above the directory should be the same one where the existing swapfile is located. This will ensure no issues while booting up.
2. The naming is done like this to avoid any naming conflicts.
3. `count=4M` implies making a 4GB file, i.e. the swap space will be 4GB.

## Step 3: Make the file created into a system swapfile

Run the following command to make the newly created file into a swapfile.

```
sudo chmod 0600 /swapfile1.img && sudo mkswap /swapfile1.img
```

The command should return an output similar to this:

```
Setting up swapspace version 1, size = 4 GiB (4294963200 bytes)
no label, UUID=ffa65eb7-7818-417e-8cf7-f93cd8e9773e
```

## Step 4: Activate this new swapfile

Using vim or nano, edit the `/etc/fstab` file using sudo (root) privileges. In this file find that line that was seen in Step 1, and repalce the filename with the new filename. (in this case replace `/swapfile` with `/swapfile1.img` and keep the rest of the line unchanged)

## Step 5: Activate this new swapfile

Run the following command to activate this swapfile

```
sudo swapon /swapfile1.img
```

## Step 6: Check this worked

Run the following command which will show all the swapfiles currently active.

```
sudo cat /proc/swaps
```

In this case the output as indicated below shows both swapfiles active. This will change once the system is restarted.

```
Filename				Type		Size		Used		Priority
/swapfile                               file		2097148		1292		-2
/swapfile1.img                          file		4194300		0		-3
```

## Step 7: Restart the system

## Step 8: Check the changes are still effective

Run the command `sudo cat /proc/swaps`, and check the output this time as indicated below in the output, only the new swapfile should show up.

```
Filename				Type		Size		Used		Priority
/swapfile1.img                          file		4194300		0		-2
```

## Step 9: Cleanup

Since the old swapfile is not going to be used, you can navigate to the location of the swapfile and remove the old swapfile. In this case the command to achieve this is

```
sudo rm /swapfile
```

Now upon running the command from step 1,
`sudo ls / -al | grep swap` , only the new swapfile created here should be seen.

```
-rw-------   1 root root 4294967296 Nov 16 14:06 swapfile1.img
```

In all commands, make sure to replace `/` with the appropriate directory found in Step 1.
