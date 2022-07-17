import { connect, Connection } from 'amqplib'

const url = 'amqp://localhost'

export class RabbitMQService {
  private static connection: Connection

  static async connect() {
    this.connection = await connect(url)

    console.log('connect rabbitmq server')
  }

  static async createChannel() {
    return await this.connection.createChannel()
  }

  static async close() {
    await this.connection.close()
  }
}
