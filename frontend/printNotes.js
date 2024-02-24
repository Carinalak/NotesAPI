import deleteNote from "./deleteNote.js";
import addNote from "./addNote.js";


    
// ------- SKRIVER UT ALLA NOTES TILL EN LISTA----- //

export default function printNotes() {
    fetch("http://localhost:3000/notes")
    .then(res => res.json())
    .then(data => {
        console.log("name", data);
        notesList.innerHTML = "";

         // Omvänd ordning på arrayen
         data.reverse();

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
                deleteNote(note.id) 
                    .then(() => {
                        alert("Ditt dokument raderades.");
                        printNotes();
                    })
                    .catch(error => {
                        console.error("Error deleting note:", error);
                    });
        });
            
            li.appendChild(deleteIcon);
           

// ------------------- SLUT DELETE ------------------------ //


// --------------- ÖPPNA ETT DOKUMENT -------------------- //

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
 
function openNote(notesId) {
    fetch("http://localhost:3000/notes/" + notesId)
    .then(res => res.json())
    .then(data => {

        document.getElementById("noteContainer").innerHTML = "";

        let documentTitle = document.createElement("h3");
        documentTitle.innerText = data[0].name;

        let documentText = document.createElement("div");
        documentText.innerText = data[0].note;

        let editBtn = document.createElement("button");
        editBtn.innerText = "Redigera dokument";
        editBtn.style.marginTop = "20px";


        let noteContainer = document.getElementById("noteContainer");
        noteContainer.appendChild(documentTitle);
        noteContainer.appendChild(documentText);
        noteContainer.appendChild(editBtn);

        console.log("data", data);
        console.log(notesId);
    })
    .catch(error => {
        console.error('Error fetching note:', error);
    });
};

