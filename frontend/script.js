import printNotes from "./printNotes.js";
import addNote from "./addNote.js";
import deleteNote from "./deleteNote.js";



// --------------------- OpenNewNoteBtn ---------------------------- //

function printOpenNewNoteBtn() {

    let openNewNoteBtn = document.getElementById("openNewNoteBtn");
    let newNoteForm = document.getElementById("newNoteForm");
    //let openNewNoteBtn = document.createElement("button");
    //openNewNoteBtn.id = "openNewNoteBtn";
    openNewNoteBtn.innerText = "Skapa nytt dokument";
    
    openNewNoteBtn.addEventListener("click",  () => {
        newNoteForm.style.display = "block"; 
        console.log();
    });
};

// Dölj openNewNoteButton
function hideOpenNewNoteBtn() {
    let openNewNoteBtn = document.getElementById("openNewNoteBtn");
    openNewNoteBtn.style.display = "none";
}
// Visa openNewButton
function showOpenNewNoteBtn() {
    let openNewNoteBtn = document.getElementById("openNewNoteBtn");
    openNewNoteBtn.style.display = "inline"; 
}

// ------------- OpenNewNoteBtn slutar -------------------- //

// Logga ut användaren när de lämnar sidan
window.onbeforeunload = function() {
    localStorage.removeItem("user");
};

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

    //  Här måsta jag fetcha och få svar med userns id om jag vill ha det (med input osv) 

    if (localStorage.getItem("user")) {
        localStorage.removeItem("user");
        printLoginBtn();
        hideOpenNewNoteBtn();
        notesList.innerHTML = "";
        newNoteForm.style.display = "none";
        } else  {
            localStorage.setItem("user", JSON.stringify("mittlösenord!!!"));
            printLogoutBtn();
            printOpenNewNoteBtn();
            showOpenNewNoteBtn();
            printNotes();
    
        }
});

