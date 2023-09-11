#!/usr/local/bin/python3

import pika
import time

# this is the container name for the rabbitmq docker container
connection = pika.BlockingConnection(pika.ConnectionParameters('some-rabbit'))
channel = connection.channel()

# channel.queue_declare(queue='hello')
channel.queue_declare(queue='task_queue', durable=True)

def callback(ch, method, properties, body):
    print(f" [x] Received {body.decode()}")
    time.sleep(body.count(b'.'))
    print(" [x] Done")
    ch.basic_ack(delivery_tag=method.delivery_tag)


# this ensures only 1 message is sent to a worker at a time
channel.basic_qos(prefetch_count=1)
# channel.basic_consume(queue='hello',
channel.basic_consume(queue='task_queue',
                      # auto_ack=True,
                      on_message_callback=callback)

print(' [*] Waiting for messages. To exit press CTRL+C')
channel.start_consuming()

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print('Interrupted')
        try:
            sys.exit(0)
        except SystemExit:
            os._exit(0)
