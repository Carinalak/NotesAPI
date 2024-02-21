import deleteNote from "./deleteNote.js";

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

            deleteIcon.src = "img/deleteIcon.png";
            deleteIcon.alt = "Ta bort";
            deleteIcon.classList.add("delete-icon");

            deleteIcon.addEventListener("click", () => {
                console.log("noteid", note)
                deleteNote(note.id); 
            });

            li.appendChild(deleteIcon);

            let textNode = document.createTextNode(note.name);
            li.appendChild(textNode);

            notesList.appendChild(li);

            li.addEventListener("click", () => {
            console.log("Click!");

            });

        });
    })
    .catch(error => {
        console.error("Error fetching notes:", error);
    });
}






function printNote() {
    fetch("http:localhost:3000/notes/:notesId")
    .then(res => res.json())
    .then(data => {


        data.map(note => {
            let NoteName = document.createElement("h3");
            let NoteText = document.createElement("div");
            NoteName.innerText = notes.name;
            NoteText.innerText = notes.note;

            NoteName.addEventListener("click", () => {


            });

        })
    })
}

printNote();
