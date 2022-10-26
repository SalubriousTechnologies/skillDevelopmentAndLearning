# Setting up Miniconda for Machine Learning

## Download Bash File

First of all go to the [Miniconda](https://docs.conda.io/en/latest/miniconda.html) official website. Choose the latest download as per your operating system configuration and download the file.

## Install Miniconda

Go to the directory wherever you have downloaded the bash file, run `bash Miniconda3-latest-Linux-x86_64.sh` command in a terminal and follow the instructions till it is fully installed. Here, `Miniconda3-latest-Linux-x86_64.sh` is the bash file which you just downloaded from the Miniconda website.

## Create virtual environment

Creating a virtual environment is very necessary so that you can install separate libraries for each projects. And even can use different versions of the same library in different virtual environments. To create a virtual environment, follow these steps-

Once you finish installing the Miniconda, create your project directory (wherever you want like inside Documents directory). After create your project directory, go inside the directory and open a terminal. Run `conda create --prefix venv jupyter numpy pandas matplotlib` command in the terminal to create a virtual environment and install `jupyter notebook`, `numpy`, `pandas` and `matplotlib`. We can install these libraries separately as well but since these are some standard libraries which we generally use in all the projects so it is better to install them at the time of virtual environment creation itself.

## Activate virtual environment

Virtual environment can be activated by running `conda activate venv/`.

## Install a library using Conda

You can install any library using conda by just running `conda install library-name`. For example, for installing the scikit learn, run `conda install scikit-learn`. One thing to remember is that you need to activate your virtual environment first in order to install any libraries. You can install any libraries under only a virtual environment.

## Open Jupyter Notebook

Jupyter notebook is a code editor for machine learning. To open up a jupyter notebook, run `jupyter notebook` after activating the virtual environment. This jupyter notebook will open up in the default browser. Once the jupyter notebook is opened to use. You can create a new python file and start writing machine learning codes.

## Deactivate virtual environment

Once you finish all your task and want to close the jupyter notebook. You need to first press `ctrl + c` to stop the kernel and press `y` when it is asked. Once kernel is stopped, run `conda deactivate` to deactivate the virtual environment. Once you deactivate the virtual envrionment, you will no longer be able to use jupyter notebook unless you again activate the virtual environment.