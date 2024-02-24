import printNotes from "./printNotes.js";
import addNote from "./addNote.js";
import deleteNote from "./deleteNote.js";



// --------------------- KNAPP FÖR NYTT DOKUMENT ---------------------------- //

function openNewNoteBtn() {

    let openNewNoteBtn = document.getElementById("openNewNoteBtn");
    let newNoteForm = document.getElementById("newNoteForm");
    //let openNewNoteBtn = document.createElement("button");
    //openNewNoteBtn.id = "openNewNoteBtn";
    openNewNoteBtn.innerText = "Skapa nytt dokument";
    
    openNewNoteBtn.addEventListener("click",  () => {
        newNoteForm.style.display = "block"; 
        notesList.innerHTML = "";
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


// ---------------------  SLUT KNAPP FÖR NYTT DOKUMENT ---------------------------- //
// --------------------- KNAPP FÖR ALLA DOKUMENT ---------------------------- //

function openNotesListBtn() {
    let openNotesListBtn = document.getElementById("openNotesListBtn");

    openNotesListBtn.innerText = "Se alla dokument";
    
    openNotesListBtn.addEventListener("click",  () => {
        printNotes();
        hideNewNoteForm();
        
        console.log("click");
    });
}
function hideNewNoteForm() {
    let newNoteForm = document.getElementById("newNoteForm");
    newNoteForm.style.display = "none";
}



// Dölj openNotesListBtn
function hideOpenNotesListBtn() {
    let openNotesListBtn = document.getElementById("openNotesListBtn");
    openNotesListBtn.style.display = "none";
}
// Visa openNotesListBtn
function showOpenNotesListBtn() {
    let openNotesListBtn = document.getElementById("openNotesListBtn");
    openNotesListBtn.style.display = "inline"; 
    
}




// ---------------------  SLUT VISA KNAPP FÖR ALLA DOKUMENT ---------------------------- //


// ---------------------  VISA KNAPP FÖR LISTAN ---------------------------- //
/*
function printOpenNotesListBtn() {

    let openNotesListBtn = document.getElementById("openNotesListBtn");
    openNotesListBtn.innerText = "Se dokumentlista";
    openNotesListBtn.addEventListener("click",  () => {
     
        console.log();

    });
};

// Dölj openNewNoteButton
function hideOpenNotesListBtn() {
    let openNotesListBtn = document.getElementById("OpenNotesListBtn");
    openNotesListBtn.style.display = "none";
}
// Visa openNewButton
function showOpenNotesListBtn() {
    let openNotesListBtn = document.getElementById("OpenNotesListBtn");
    openNotesListBtn.style.display = "inline"; 
}
// --------------------- SLUT VISA KNAPP FÖR LISTAN ---------------------------- //
*/

function hideNoteContainer() {
    let noteContainer = document.getElementById("noteContainer");
    noteContainer.style.display = "none";
}


// ------------- OpenNewNoteBtn slutar -------------------- //

// --------- Logga ut användaren när de lämnar sidan ------ //
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
        hideNoteContainer();
        hideOpenNewNoteBtn();
        hideOpenNotesListBtn();
        notesList.innerHTML = "";
        newNoteForm.style.display = "none"; 
        
        } else  {
            localStorage.setItem("user", JSON.stringify("mittlösenord!!!"));
            printLogoutBtn();
            showOpenNewNoteBtn();
            openNewNoteBtn();
            showOpenNotesListBtn();
            printNotes();
            openNotesListBtn();
    
        }
});

