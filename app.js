const server = require('./node_modules/pc-mock/lib/server')

server({
  port: process.env.PORT || 3000,
  delay: 0
})