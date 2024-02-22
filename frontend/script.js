import printNotes from "./printNotes.js";
import addNote from "./addNote.js";
import deleteNote from "./deleteNote.js";




let loginBtn = document.getElementById("loginBtn");

function printLogoutBtn() {
    loginBtn.innerText = "Logga ut";
}

function printLoginBtn() {
    loginBtn.innerText = "Logga in";
}

if (localStorage.getItem("user")) {
    printLogoutBtn();
    } else {
        printLoginBtn();
    }

loginBtn.alt = "Logga in";
loginBtn.style.marginBottom = "20px";

loginBtn.addEventListener("click", () => {

    //  Här måsta jag fetcha och få svar med userns id (med input osv) 

    if (localStorage.getItem("user")) {
        localStorage.removeItem("user")
        notesList.innerHTML = "";
        printLoginBtn();

        } else  {
            localStorage.setItem("user", JSON.stringify("mittlösenord!!!"));
            printLogoutBtn();
            printNotes();
            printOpenNewNoteBtn ()

// --------------------- NewNoteBtn ---------------------------- //
            function printOpenNewNoteBtn () {
                let OpenNewNoteBtn = document.getElementById("OpenNewNoteBtn");
                OpenNewNoteBtn.id = "OpenNewNoteBtn";
                OpenNewNoteBtn.innerText = "Skapa nytt dokument";
                // newNoteForm.appendChild(saveNewNoteBtn);
                
                OpenNewNoteBtn.addEventListener("click",  () =>{
                    newNote();
                    console.log();
                })
            }
            
        }
})




// ---------------------- NYTT DOKUMENT ----------------------- //

/*

function newNote() {
    
        //let newNoteName = document.getElementById("newNoteName");
        //let newNoteText = document.getElementById("newNoteText");
        // let newNoteForm = document.createElement("div");
        // newNoteForm.id = "newNoteForm";
        let newNoteForm = document.getElementById("newNoteForm");

        let newNoteName = document.createElement("input");
        newNoteName.type = "text";
        newNoteName.id = "NewNoteName";
        newNoteName.placeholder = "Notnamn";
        newNoteName.style.width = "150px";
        newNoteName.style.marginBottom = "10px";
        newNoteName.style.borderRadius = "2px";


        let newNoteText = document.createElement("textarea");
        newNoteText.id = "newNoteText";
        newNoteText.placeholder = "Text";
        newNoteText.style.width = "600px";
        newNoteText.style.height = "300px";
        newNoteText.style.borderRadius = "2px";
        newNoteText.style.marginBottom = "10px";

        newNoteForm.appendChild(newNoteName);
        newNoteForm.appendChild(document.createElement("br"));
        newNoteForm.appendChild(newNotetext);
        newNoteForm.appendChild(document.createElement("br"));


        let saveNewNoteBtn = document.createElement("button");
        saveNewNoteBtn.id = "saveNewNoteBtn";
        saveNewNoteBtn.className = "save-button";
        saveNewNoteBtn.innerText = "Spara";
        newNoteForm.appendChild(saveNewNoteBtn);

       // let saveNewNoteBtn = document.createElement("saveNewNoteBtn");
        //saveNewNoteBtn.id ="saveNewNoteBtn";
          

}

newNote();*/

/*
function newNote() {
    let newNoteForm = document.getElementById("NewNoteForm");

    let newNoteName = document.createElement("input");
    newNoteName.type = "text";
    newNoteName.id = "newNoteName";
    newNoteName.placeholder = "Notnamn";
    newNoteName.style.width = "150px";
    newNoteName.style.marginBottom = "10px";
    newNoteName.style.borderRadius = "2px";

    let newNoteText = document.createElement("textarea");
    newNoteText.id = "newNoteText";
    newNoteText.placeholder = "Text";
    newNoteText.style.width = "600px";
    newNoteText.style.height = "300px";
    newNoteText.style.borderRadius = "2px";
    newNoteText.style.marginBottom = "10px";

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

newNote();*/
