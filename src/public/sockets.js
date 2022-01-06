// al cargar io en la pagina la llamo y la declaro socket para poder utilizarla 
const socket = io()
// creo la funcion savenote para emitir el mensaje o la vandera desde el cliente la cual resive el servidor para almacenar una nueva nota
const saveNote = (title, description) => {
    socket.emit('client:newNote', {
        title,
        description,
    })
}
// espero una respuesta del servidor para crear y mostrar una nota 
socket.on('server:newNotes', appenNote)
//espero una respuesta del servidor para cargar los datos de arranque que este almacenados en las notas del servidor
socket.on('server:loadNotes', loadnotes)