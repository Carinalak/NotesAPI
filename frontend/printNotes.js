import deleteNote from "./deleteNote.js";
import addNote from "./addNote.js";



    
// ------- SKRIVER UT ALLA NOTES TILL EN LISTA----- //

export default function printNotes() {
    fetch("http://localhost:3000/notes")
    .then(res => res.json())
    .then(data => {
        console.log("name", data);

        //notesList.innerHTML = "";
        
         // Omvänd ordning på arrayen
         data.reverse();

        data.forEach(note => {
            
            let li = document.createElement("li");
            let deleteIcon = document.createElement("img");
            let notesId = note.id;

            li.style.cursor = "pointer";

// ---------------- DELETE ICON I LISTAN --------------------- //

            deleteIcon.src = "img/deleteIcon.png";
            deleteIcon.alt = "Ta bort";
            deleteIcon.classList.add("delete-icon");

            deleteIcon.addEventListener("click", () => {
                console.log("noteid", note)
                deleteNote(note.id) 
                    .then(() => {
                       // alert("Ditt dokument raderades.");
                        //newNotesList.style.display = "visible"; 
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
        documentTitle.style.backgroundColor = "#f2f2f2";
        documentTitle.style.padding = "6px";
        documentTitle.style.textAlign = "center";
        documentTitle.style.borderRadius = "4px";

        let documentText = document.createElement("div");
        documentText.innerText = data[0].note;
        documentText.style.backgroundColor = "#f2f2f2";
        documentText.style.padding = "6px";
        documentText.style.textAlign = "left";
        documentTitle.style.borderRadius = "4px";
        documentText.style.width = "200px";
        documentText.style.marginTop = "5px";

        
// ----------------------- REDIGERA KNAPP ------------------------------------- //

        let editBtn = document.createElement("button");
        editBtn.innerText = "Redigera dokument";
        editBtn.style.marginTop = "20px";

        editBtn.addEventListener("click", () => {
            // Fyll formuläret med befintligt dokument
            let newNoteName = document.getElementById("newNoteName");
            let newNoteText = document.getElementById("newNoteText");
            editBtn.style.display = "none";
        
            newNoteName.value = data[0].name;
            newNoteText.value = data[0].note;

 // -------------------- REDIGERA DOKUMENT ---------------------------------- //

            // Visa formuläret
            let newNoteForm = document.getElementById("newNoteForm");
            newNoteForm.style.display = "inline";
        });

        let updatedNote = {
        name: newNoteName.value,
        note: newNoteText.value
    };

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

