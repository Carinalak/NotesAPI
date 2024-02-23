import deleteNote from "./deleteNote.js";


    
// ------- SKRIVER UT ALLA NOTES TILL EN LISTA----- //

export default function printNotes() {
    fetch("http://localhost:3000/notes")
    .then(res => res.json())
    .then(data => {
        console.log("name", data);
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

            li.addEventListener("click", () => {
                openNote(note.id);
                console.log("Click!");
            });

            notesList.appendChild(li);
        });
    })
    .catch(error => {
        console.error("Error fetching notes:", error);
    });
};

 // SKRIVER UT DET DOKUMENT SOM MAN KLICKAR PÅ
 
function openNote(notesId) {
    fetch("http://localhost:3000/notes/" + notesId)
    .then(res => res.json())
    .then(data => {

        document.getElementById("noteContainer").innerHTML = "";

        let h3 = document.createElement("h3");
        h3.innerText = data[0].name;

        let div = document.createElement("div");
        div.innerText = data[0].note;

        let noteContainer = document.getElementById("noteContainer");
        noteContainer.appendChild(h3);
        noteContainer.appendChild(div);
        console.log("data", data);
        console.log(notesId);
    })
    .catch(error => {
        console.error('Error fetching note:', error);
    });
};

