import printNotes from "./printNotes.js";
import deleteNote from "./deleteNote.js";


// --------------------- NYTT DOKUMENT FORMULÄR -------------------- //
function printNewNoteForm() {
    let newNoteForm = document.getElementById("newNoteForm");

    let newNoteName = document.createElement("input");
    newNoteName.type = "text";
    newNoteName.id = "newNoteName";
    newNoteName.placeholder = "Dokumentnamn";
    newNoteName.style.width = "150px";
    newNoteName.style.marginBottom = "10px";
    newNoteName.style.marginRight = "20px";
    newNoteName.style.borderRadius = "2px";

    let newNoteText = document.createElement("textarea");
    newNoteText.id = "newNoteText";
    newNoteText.placeholder = "Skriv din text här.";
    newNoteText.style.width = "500px";
    newNoteText.style.height = "300px";
    newNoteText.style.borderRadius = "2px";
    newNoteText.style.marginBottom = "10px";
    newNoteText.style.marginRight = "20px";

    newNoteForm.appendChild(newNoteName);
    newNoteForm.appendChild(document.createElement("br"));
    newNoteForm.appendChild(newNoteText);
    newNoteForm.appendChild(document.createElement("br"));

    let saveNewNoteBtn = document.createElement("button");
    saveNewNoteBtn.id = "saveNewNoteBtn";
    saveNewNoteBtn.className = "save-button";
    saveNewNoteBtn.innerText = "Spara";

    newNoteForm.appendChild(saveNewNoteBtn);
}
    printNewNoteForm(); 
    

// -------------------------- SPARA KNAPP FUNKTION --------------------------- //

let newNoteName = document.getElementById("newNoteName");
let newNoteText = document.getElementById("newNoteText");
let saveNewNoteBtn = document.getElementById("saveNewNoteBtn");

export default saveNewNoteBtn.addEventListener("click", () => {  
    
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

         alert("Ditt dokument har sparats.");
        //noteContainer.innerHTML = ("Ditt dokument har sparats!");

        setTimeout(() => {
            //noteContainer.innerHTML = "";
            newNoteForm.style.display = "inline"; 
            printNotes(); 
        }, 2000);

         newNoteForm.style.display = "none";
        
        //showNoteContainer();
         //newNotesList.style.display = "visible"; 
    })
});
