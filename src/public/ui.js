const notes = document.querySelector('#notes')
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
const loadnotes = notes => {
    console.log(notes)
    notes.forEach(note =>
        appenNote(note)
    );
}