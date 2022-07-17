import { Options } from 'amqplib'
import { queue } from './queue'
import { RabbitMQService } from './rabbitmq-service'

const options: Options.Consume = { noAck: false }

async function consume(queue: string) {
  await RabbitMQService.connect()
  const channel = await RabbitMQService.createChannel()

  await channel.assertQueue(queue, {
    durable: true
  })

  await channel.prefetch(1)

  await channel.consume(
    queue,
    msg => {
      if (!msg) {
        throw new Error('No msg')
      }

      console.log('Received: ' + msg.content.toString())
      channel.ack(msg)
    },
    options
  )
}

consume(queue.test)
