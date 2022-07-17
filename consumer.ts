import { connect } from 'amqplib'

async function receive() {
  const connection = await connect('amqp://localhost')
  const channel = await connection.createChannel()

  const queue = 'hello'

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
    {
      noAck: false
    }
  )
}
receive()
