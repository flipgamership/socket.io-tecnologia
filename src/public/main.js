//cacturo el formulario por su id
const form = document.querySelector('#noteForm')
//caturo los datos del formulario
const title = document.querySelector('#title')
const description = document.querySelector('#description')
// creo un evento que escucha el submit del formularo y ejecuta la funcion savenote para guardar la nueva nota
// la variable e.preventDefault() evita que la pagina sea redirigida y hace que pueda ejecutar el resto de las funciones para sockets
form.addEventListener('submit', e =>{
    e.preventDefault()
    saveNote(title.value, description.value)
    
})