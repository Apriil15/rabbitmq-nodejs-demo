import { setTimeout } from 'timers/promises'
import { queue } from './queue'
import { RabbitMQService } from './rabbitmq-service'

type Params = {
  queue: string
  msg: string
}

async function publish(params: Params) {
  await RabbitMQService.connect()
  const channel = await RabbitMQService.createChannel()

  await channel.assertQueue(params.queue, {
    durable: true
  })

  channel.sendToQueue(params.queue, Buffer.from(params.msg), {
    persistent: true
  })
  console.log('Sent: ' + params.msg)

  await setTimeout(0)

  await RabbitMQService.close()
}

publish({ queue: queue.test, msg: 'hello' })
