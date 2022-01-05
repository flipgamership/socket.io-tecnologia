import express from "express";
import { Server as webSocket } from "socket.io";
import http from 'http'

const app = express()
const server = http.createServer(app)
const io = new webSocket(server)

io.on('connection', (socket)=>{
    console.log('new connection: ' , socket.id)
    socket.on('client:newNote', data=>{
        console.log(data)
    })
})

app.use(express.static(__dirname + '/public'))
server.listen(3000)

console.log('server on port 3000')
