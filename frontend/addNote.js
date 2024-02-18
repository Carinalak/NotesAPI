import printNotes from "./printNotes.js";

let newNoteName = document.getElementById("newNoteName");
let newNoteText = document.getElementById("newNoteText");
let saveNewNoteBtn = document.getElementById("saveNewNoteBtn");

export default saveNewNoteBtn.addEventListener("click", () => {             //exporterar en modul som är en EventListener.
    console.log("click");

    let saveNote = {
        name: newNoteName.value,
        note: newNoteText.value,
        userId: 1           // blir foreign key i databasen. När användaren loggar in sparar vi användarens id i local storage.
                            // om vi vill skicka in användaren som är inloggad hade vi istället skrivit: userId: localStorage.getItem("userId")
    }

    fetch("http://localhost:3000/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(saveNote)
    })

    .then(res => res.json())
    .then(data => {
        console.log("spara note", data);
        newNoteName.value = "";
        newNoteText.value = "";

        printNotes();
    })

});