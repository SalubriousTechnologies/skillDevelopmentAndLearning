# Basic Commands

The API provided by docker is very similar to the linux terminal commands and even follows very similar naming conventions which will help you feel right at home if you have any experience with Linux.
If you do not have experience with Linux or any Unix system, the API is fairly straight forward to pick up and get started with and the `docker --help` command will always help you out anytime you are stuck or require any guidance.

Based on the anaology from our [Overview](README.md#Overview) section, in order to start any container (OS) we must first create (install) it using the image of that container (OS).

To check the status of images that you have on your system you can execute the command:

```
docker image ls
```

This command returns all the images on your system, if this is a new install you are likely to see no images and the output.

```
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
```

Let us get an image from the dockerhub using the following command which will simply download the image [hello-world](https://hub.docker.com/_/hello-world) from docker-hub which is the default repository from where the images are retrieved/fetched.

```
docker pull hello-world
```

In the output of this command there should be a line stating that the image was downloaded, now if we were to execute the command `docker image ls` again we should see an image that we just downloaded.

```
REPOSITORY    TAG       IMAGE ID       CREATED        SIZE
hello-world   latest    18e5af790473   3 months ago   9.14kB
```

Once we have an image, we can then create a container from this image by running the following command

```
docker run hello-world
```

This will create a container from this image which we had just downloaded and then run that container. Note this container prints something to the console as well which is related to how the containers are linked to the STDOUT and STDIN. More details for this can be found in the [docs here](https://docs.docker.com/engine/reference/run/#foreground)
