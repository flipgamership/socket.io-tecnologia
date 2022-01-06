import express from "express";
import { Server as webSocket } from "socket.io";
import http from 'http'
import { v4 as uuid } from "uuid"
const notes = [

]

const app = express()
const server = http.createServer(app)
const io = new webSocket(server)

io.on('connection', (socket) => {
    console.log('new connection: ', socket.id)
    socket.emit('server:loadNotes', notes)
    socket.on('client:newNote', (data) => {
        const note = { ...data, id: uuid() }
        console.log(note)
        notes.push(note)
        socket.emit('server:newNotes', note)
    })
})

app.use(express.static(__dirname + '/public'))
server.listen(3000)

console.log('server on port 3000')
