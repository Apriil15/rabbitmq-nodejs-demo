import { connect } from 'amqplib'

async function send() {
  const connection = await connect('amqp://localhost')
  const channel = await connection.createChannel()

  const queue = 'hello'
  const msg = 'hello'

  await channel.assertQueue(queue, {
    durable: true
  })

  channel.sendToQueue(queue, Buffer.from(msg), { persistent: true })
  console.log('Sent: ' + msg)

  setTimeout(() => {
    connection.close()
    process.exit(0)
  }, 500)
}
send()
