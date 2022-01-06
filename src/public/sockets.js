const socket = io()
const saveNote = (title, description) => {
    socket.emit('client:newNote', {
        title,
        description,
    })
}
socket.on('server:newNotes', appenNote)
socket.on('server:loadNotes', loadnotes)