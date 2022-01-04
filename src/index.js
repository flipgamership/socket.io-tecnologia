import express from "express";
import { Server as webSocket } from "socket.io";
import http from 'http'

const app = express()
const httpserver = http.createServer(app)
const io = new webSocket(httpserver)

io.on('connection', ()=>{
    console.log('new connection')
})

app.use(express.static(__dirname + '/public'))
httpserver.listen(4000)
app.listen(3000)
console.log('server on port 3000')
