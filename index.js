import { Server } from '@hocuspocus/server'

const server = new Server({
  port: process.env.PORT || 1234,
  async onConnect(data) {
    console.log('Usuario conectado')
  },
})

server.listen()