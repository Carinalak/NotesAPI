import printNotes from "./printNotes.js";


export default function deleteNote(notesId) {
  
    console.log("delete note", notesId);

    fetch("http://localhost:3000/notes/" + notesId, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        console.log("Note raderad", data);

        printNotes();
    })
}