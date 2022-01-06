// declaro el software express como servisio de conexion
import express from "express";
//declaro socket.io y lo renombro a websocket para llamar la dependecia
import { Server as webSocket } from "socket.io";
//nesesito un servicio http para usarlo en conjunto con socket
import http from 'http'
// lllamo uuid para cambiar el id de los datos que traigo desde el front
import { v4 as uuid } from "uuid"
// creo el lugar donde se van a almacenar las notas (si el servidor se reinicia estos datos se pierden)
const notes = [

]
// app es la forma con la que se llama express
const app = express()
// creo el server http que va a funcionar con express
const server = http.createServer(app)
//llamo el server con websocket para crear io el nombre de la variable para llamar a los sockes en el servidor 
const io = new webSocket(server)
// creo las funciones que va a ejecutar el servidor 
io.on('connection', (socket) => {
    // cuando hay una nueva conexion envio por consola nueva conexion mas el id de la conexion
    console.log('new connection: ', socket.id)
    // creo el emit o la vandera de arraque al iniciar en la cual se cargan las notas que esten almacenas (si el servidor se ha reiniciado no deberia haber notas)
    socket.emit('server:loadNotes', notes)
    // creo un on o resector que escucha la respuesta del cliente la cual es una orden de crear una nueva nota 
    socket.on('client:newNote', (data) => {
        const note = { ...data, id: uuid() }
        console.log(note)
        notes.push(note)
        //renvio una respuesta a cliente para mostrar la nota nueva
        socket.emit('server:newNotes', note)
    })
})
//declaro la carpeta donde estan mis datos o archivos con express
app.use(express.static(__dirname + '/public'))
server.listen(3000)

console.log('server on port 3000')
// nota para la configuracion de arranque del packege json debes de agregar nodemos con babel de la la siguiente manera 
/* "start": "babel-node src / index.js",
    "dev": "nodemon --exec npm start", */
/* en babel deben de crear un archivo con el nombre .babelrc en el cual se almacene el siguiente codigo 
{
    "presets": [
        "@babel/preset-env"
    ]
}
*/