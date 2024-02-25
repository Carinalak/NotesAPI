import printNotes from "./printNotes.js";
import addNote from "./addNote.js";
import deleteNote from "./deleteNote.js";




fetch("http://localhost:3000/notes/" + notesId, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(saveNote)
    })
    .then(res => res.json())
    .then(data => {

        document.getElementById("noteContainer").innerHTML = "";

        let documentTitle = document.createElement("h3");
        documentTitle.innerText = data[0].name;
        documentTitle.style.backgroundColor = "#f2f2f2";
        documentTitle.style.padding = "6px";
        documentTitle.style.borderRadius = "4px";

        let documentText = document.createElement("div");
        documentText.innerText = data[0].note;
        documentText.style.backgroundColor = "#f2f2f2";
        documentText.style.padding = "6px";
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
            newNoteForm.style.display = "block";
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


