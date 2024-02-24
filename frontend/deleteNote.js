import printNotes from "./printNotes.js";
import addNote from "./addNote.js";


export default function deleteNote(notesId) {
  
    console.log("delete note", notesId);

    fetch("http://localhost:3000/notes/" + notesId, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        console.log("Note raderad", data);
        noteContainer.innerHTML = "Dokumentet har raderats.";
        alert("Ditt dokument raderas.");
       // printNotes();
        newNotesList.style.display = "visible";          
        
    })
}