# Setup

**NOTE:** Do **NOT** use this for production setup

In order to install docker on an Ubuntu system you can execute the convenience script provided by [docker.com](https://docs.docker.com/engine/install/ubuntu/#install-using-the-convenience-script).
This method basically downloads a convenience script and executing this script installs all the dependencies and the packages needed to run docker on your system.

Upon installation you can check that the installation was successful by running the `sudo docker container ls -a` command which should return an output instead of any errors.

In order to prevent having to use `sudo` with all docker commands, which is required due to docker requiring root priviliges to bind to a UNIX socket, you will need to follow along with the direction provided [here](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user) which essentially helps you create a group called `docker` and provide it sudo priviliges and allows you to add your current user to this group.

At the end of these steps you should be able to execute the below command and get a response without any error.

```
docker container ls -a
```

OUTPUT:

```
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```
