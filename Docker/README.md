# Docker getting started

_Note:_ This guide is primarily targeted for developers who have a slight interest in learning about docker or want to see how they can use it.

## Overview

Docker is a great tool that can help in simplifying the developer workflow specifically by firstly providing a deployment like environment to run and develop your apps in. Secondly, it allows you to keep your development environment clean by avoiding having to install all runtimes, compilers and languages in your system directly.

Docker provides the ability to work with containers, what docker provides is something similar to the ability of creating and running Virtual Machines, think Virtual Box, but instead of you having to dedicate resources and setting up a new OS on it, this is more streamlined in the sense of allowing you to run containers on your machine, wherein each container can be compared to a VM that you would create with a Virtual Box.

_Disclaimer:_ This is a non-technical but relatable way to explain what docker is, if you are interested in learning more about the basics/working of docker from a technical standpoint, you can visit this [page on the docker docs](https://docs.docker.com/get-started/#what-is-a-container) which gives a detailed overview about docker.

Continuing with our analogy of Docker being something akin to a Virtual Machine, the containers can then be thought of as the OS that runs on the Virtual Machine, so the container runs on Docker. In order to "install" the OS on the Virtual Machine you generally have to download an image which you download from resources like [the ubuntu webpage](https://ubuntu.com/tutorials/install-ubuntu-desktop#2-download-an-ubuntu-image), now using this image you are able to "install" the OS on your VM, similarly in Docker land you can download images from [docker hub](https://hub.docker.com/) which in turn are used to "create" containers that run in Docker.

To summarize, Docker gives us the ability to run containers on our system, by using images to create containers.

The images available at docker hub range from simple servers like Apache, to runtimes like node, to OS like ubuntu, to databases like Mongo, Postgres MariaDB and even full blown applications like mediawiki, solr, elastic-search and several more as indicated by the categories list on their webpage.

Using docker tremendously lowers the barrier to try out some of the open-source packages and tools written in other languages that you might not be familiar with.
Eg. You might not know how to go about creating a runtime to run a JAVA, PHP, Javascript application but with docker you will not need to know how to do any of that (unless you are making changes into the application itself) you can simply pull their image from docker-hub and create a container from it and start testing out the application. It really is that simple.
In case you do not find the application useful enough, you can simply stop the container and remove the image and data of that container and your system if free from that application without any trace of the specific runtime which was being used by the application.

Another usecase is when you need to have a server or a front-end running to develop your application, you can simply have that server or front-end being provided to you from a docker-container without having to worry about what that server or front-end is running on or working with and you can simply focus on your application.

All of this to say that docker can help you simplify your workflow and enable you to keep your system clean while providing you the confidence that what you witness in the development process is what you will see in the production environment, no more pesky dev to production bugs.

## Setup

In order to setup docker on your system (assuming linux) you can follow along with the details in the [setup file](setup.md) which is based on the installation instruction available at [docker](https://docs.docker.com/engine/install/)

## API/Basic commands

A brief discussion of the basic commands available from docker id done in the file [basics](basics.md)

## Databases on docker

## Executing in runtime

## Dockerfile and containerization

## Docker compose and Swarm basics
