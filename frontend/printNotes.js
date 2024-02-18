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

            deleteIcon.src = "img/deleteIcon.png";
            deleteIcon.alt = "Ta bort";
            deleteIcon.classList.add("delete-icon");

            deleteIcon.addEventListener("click", (event) => {
               
                deleteNote(note.id); 
            });

            li.appendChild(deleteIcon);

            let textNode = document.createTextNode(note.name);
            li.appendChild(textNode);

            notesList.appendChild(li);
        });
    })
    .catch(error => {
        console.error("Error fetching notes:", error);
    });
}
