# Rabbit MQ with PIKA (python)

## Setup of Rabbit MQ and Management Plugin
Executing the below command starts a Rabbit MQ server which has the default
credentials of `guest` / `guest`. If you wish to change the default credentials
the env keys are `RABBITMQ_DEFAULT_USER` and `RABBITMQ_DEFAULT_PASS`.

```shell
docker network create amqp-python
docker run -d --hostname my-rabbit --network amqp-python -p 5672:5672 \
    --name some-rabbit rabbitmq:3
```

In order to start the rabbit mq server with the default management plugin the
below command can be executed. Note this is a plugin and there are serveral
plugins which can be found [on the plugins page of Rabbit MQ](https://www.rabbitmq.com/plugins.html)
This will start the rabbit mq server with the management ui setup and available
on [port 8080 on localhost](localhost:8080).

```shell
docker network create amqp-python
docker run -d --hostname my-rabbit --network amqp-python \
    --name some-rabbit -p 8080:15672 -p 5672:5672 rabbitmq:3-management
```

## Setup of Python for connecting using PIKA
For this demo we will be using PIKA, to setup and connect with the rabbit mq
server and we will be using a docker python runtime to work with our setup.

```shell
docker run -it --name rabbit-python --network amqp-python -p 8090:8080 \
    -v .:/code python bash
```

The previous command will launch a terminal inside the python container and you
can execute the below command to install `pika` client library in the python
container.
Additionally, all of the files for the tutorial have been copied to the
container's `/code` directory and you verify this by seeing the folder structure
replicated upon executing `ls /code` in your container.

```shell
# this command can break packages in your OS if installed directly on your OS
# instead of a venv (or docker in this case)
python -m pip install pika --upgrade
```

### Additional terminal in python environment

Some examples below require a secondary terminal to be attached to this
container to do that execute the below command in a new terminal:

```shell
docker container exec -it rabbit-python bash
```
Remember to run `cd /code` to have this new terminal be in your code's working
directory.

## Tutorial

Before proceeding with the tutorial make sure you are in the "/code" directory
`cd /code`

### Simple send and receive
The basic send.py and receive.py files are located in inside the
`basic_tutorial` directory.

To send a message to the queue inside the container terminal execute the command
```shell
python3 basic_tutorial/send.py
```
this should print the message "[x] Sent 'Hello World!'" in the terminal.

To receive the message it would be better to start another terminal with the
program so that you can monitor the receives while sending in new messages.
[refer section above on how to](#additional-terminal-in-python-environment)
In the python environment terminal execute:
```shell
python3 basic_tutorial/receive.py
```

### Workers with Queues
This will require three consoles open with the container, refer to the section
above to create new terminals.
[refer section above on how to](#additional-terminal-in-python-environment)

In 2 of the 3 terminals created, execute the below command to have the worker
wait for work to be assigned from the queue
```shell
python3 ./2_queues/worker.py
```
To send multiple work in the queue now run the following command in the 3rd
terminal
```shell
python3 ./2_queues/new_task.py First message.
python3 ./2_queues/new_task.py Second message..
python3 ./2_queues/new_task.py Third message...
python3 ./2_queues/new_task.py Fourth message....
python3 ./2_queues/new_task.py Fifth message.....
```

### With Fanout Exchange and exclusive queue
This tutorial also requires three consoles open with the container environment.
The commands to be executed are:
```shell
mkdir logs
python3 ./3_pub_sub/receive_logs.py > ./logs/logs_from_rabbit.log
```
```shell
python3 ./3_pub_sub/receive_logs.py
```
```shell
python3 ./3_pub_sub/emit_logs.py
python3 ./3_pub_sub/emit_logs.py warn: this could break!
python3 ./3_pub_sub/emit_logs.py warn: last chance to stop before this breaks!!
python3 ./3_pub_sub/emit_logs.py error: if only you had listened!!!
```
In order to view the bindings created, you can open a terminal in the rabbitmq
container and start the rabbitmqctl application in it.
```shell
docker container exec -it some-rabbit bash
rabbitmqctl list_bindings
exit
```
### With Direct Exchange and Routing Key
Again multiple consoles will be required to run this tutorial. Execute the
below commands:
**NOTE**: Make sure that the log directory exists if you are trying this out of
order
```shell
python3 ./4_routing/receive_logs_direct.py warn error > log/logs_from_rabbit_direct.log
```
```shell
python3 ./4_routing/receive_logs_direct.py info warn error
```
```shell
python3 ./4_routing/emit_logs_direct.py info "This is a test only"
python3 ./4_routing/emit_logs_direct.py warn "This is going to the file!"
python3 ./4_routing/emit_logs_direct.py error "This is also going to the file!!"
```

### With Topic Exchange and wild card in routing key
Again multiple consoles will be required to run this tutorial. Execute the
below commands:
```shell
python3 ./5_topics/receive_logs_topic.py "#"
```
```shell
python3 ./5_topics/receive_logs_topic.py "kern.*"
```
```shell
python3 ./5_topics/receive_logs_topic.py "*.critical"
```
```shell
python3 ./5_topics/receive_logs_topic.py "kern.*" "*.critical"
```
```shell
python3 ./5_topics/emit_log_topic.py "kern.critical" "A critical kernel error"
```

### With Remote Procedure Calls (RPCs)
```shell
python3 ./6_rpc/rpc_server.py
```
```shell
python3 ./6_rpc/rpc_client.py
```
