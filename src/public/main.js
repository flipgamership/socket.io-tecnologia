const socket = io()
const form = document.querySelector('#noteForm')
const title = document.querySelector('#title')
const description = document.querySelector('#description')
form.addEventListener('submit', e =>{
    e.preventDefault()

    socket.emit('client:newNote',{
        title:title.value,
        description: description.value
    })
})