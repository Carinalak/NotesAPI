
let notesList = document.getElementById("notesList");

export default function printNotes() {
    fetch("http://localhost:3000/notes")
    .then(res => res.json())
    .then(data => {
        console.log("name", data);
    // innan vi ska skriva nånting, måste vi först tömma listan, innan .map:
    notesList.innerHTML = "";;

    data.map(notes => {

        let li = document.createElement("li")

        li.innerText = notes.name;
        console.log(notesList);

       // li.addEventListener("click", () => {
    //        deleteNotes(notes.id)
    //    })

        notesList.appendChild(li);       // det är här jag kopplar in li under ul -tagen.
    })

    })
}
