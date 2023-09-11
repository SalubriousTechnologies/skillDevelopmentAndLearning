#!/usr/local/bin/python3

import pika
import sys

# this is the container name for the rabbitmq docker container
connection = pika.BlockingConnection(pika.ConnectionParameters('some-rabbit'))
channel = connection.channel()

# channel.queue_declare(queue='hello')
channel.queue_declare(queue='task_queue', durable=True)

message = ' '.join(sys.argv[1:]) or "Hello World!"

channel.basic_publish(exchange='',
                      # routing_key='hello',
                      routing_key='task_queue',
                      body=message,
                      properties=pika.BasicProperties(
                          delivery_mode = pika.spec.PERSISTENT_DELIVERY_MODE
                      ))

print(f" [x] Sent {message}")

connection.close()
