// creo notes la cual es una variable que cactura la sona donde se mostraran en el cliente las notas almacenadas del servidor 
const notes = document.querySelector('#notes')
// creo la funcion con la cual se crean las notas
const appenNote = note => {
    console.log(note)
    notes.innerHTML += `
    <div class="card card-body rounded-0 mb-2">
        <div class="d-flex justify-content-between">
            <h1 class="h3 card-title">${note.title}</h1>
            <div>
                <button class="btn btn-danger">Delate</button>
                <button  class="btn btn-secondary">Update</button>
            </div>
        </div>
        <p>${note.description}</p>
    </div>`
}
// creo una funcion donde se cargan las notas que llegan de arranque del servidor 
const loadnotes = notes => {
    console.log(notes)
    notes.forEach(note =>
        appenNote(note)
    );
}