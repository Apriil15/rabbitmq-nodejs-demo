# rabbitmq-nodejs-demo

install dependencies

```bash
npm i
```

execute RabbitMQ server with docker

```bash
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management
```

check RabbitMQ management

```
http://localhost:15672/#/
```

execute provider

```bash
npm run provider
```

execute consumer

```bash
npm run worker
```
