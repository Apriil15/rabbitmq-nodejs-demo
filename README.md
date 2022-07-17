# rabbitmq-nodejs-demo

check RabbitMQ management

```
http://localhost:15672/#/
```

## Command

```bash
# install dependencies
npm i

# execute RabbitMQ server with docker
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:management

# execute publisher
npm run publisher

#execute consumer
npm run consumer
```
