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
        }
})

