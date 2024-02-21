import deleteNote from "./deleteNote.js";


    
// ------- SKRIVER UT ALLA NOTES TILL EN LISTA----- //

export default function printNotes() {
    fetch("http://localhost:3000/notes")
    .then(res => res.json())
    .then(data => {
        console.log("name", data);
        // innan vi ska skriva nånting, måste vi först tömma listan, innan .map:
        notesList.innerHTML = "";

        data.forEach(note => {
            
            let li = document.createElement("li");
            let deleteIcon = document.createElement("img");
            let notesId = note.id;

// ---------------- DELETE EN NOTE --------------------- //

            deleteIcon.src = "img/deleteIcon.png";
            deleteIcon.alt = "Ta bort";
            deleteIcon.classList.add("delete-icon");

            deleteIcon.addEventListener("click", () => {
                console.log("noteid", note)
                deleteNote(note.id); 
            });

            li.appendChild(deleteIcon);

// ------------------- SLUT DELETE ------------------------ //

            let textNode = document.createTextNode(note.name);
            li.appendChild(textNode);

            notesList.appendChild(li);

            li.addEventListener("click", () => {
            openNote();
            console.log("Click!");

            });
        });
    })
    .catch(error => {
        console.error("Error fetching notes:", error);
    });
};


// ------- SKRIVER UT DET DOKUMENT SOM MAN KLICKAR PÅ --------- //

function openNote() {
    fetch("http://localhost:3000/notes/" + id)

    .then(res => res.json())
    .then(res => res.json())
    .then(data => {
        data.forEach(notes => {
            let h3 = document.createElement("h3");
            h3.innerText = notes.name;

            let div = document.createElement("div");
            div.innerText = notes.note;

            document.body.appendChild(h3);
            document.body.appendChild(div);
        });
    });
}

