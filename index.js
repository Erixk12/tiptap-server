// Servidor de Hocuspocus (index.js o similar)

const server = new Server({
  port: process.env.PORT || 1234,
  // 📢 AÑADIR O MODIFICAR ESTO:
  allowedOrigins: [
    'https://tiptap-server-k5kf.onrender.com', // El dominio propio
    'http://localhost:*', // Permite cualquier puerto en localhost para desarrollo
    'https://localhost:*',
    'http://localhost:5173', 
  ],
  async onConnect(data) {
    console.log('Usuario conectado')
  },
})

server.listen()