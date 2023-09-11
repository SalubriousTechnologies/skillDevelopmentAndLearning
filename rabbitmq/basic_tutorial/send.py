#!/usr/local/bin/python3

import pika

# this is the container name for the rabbitmq docker container
connection = pika.BlockingConnection(pika.ConnectionParameters('some-rabbit'))
channel = connection.channel()

channel.queue_declare(queue='hello')

channel.basic_publish(exchange='',
                      routing_key='hello',
                      body='Hello World!')

print(" [x] Sent 'Hello World!'")

connection.close()
