import printNotes from "./printNotes.js";
import addNote from "./addNote.js";
import deleteNote from "./deleteNote.js";

printNotes();


let  loginBtn = document.getElementById("loginBtn")

if (localStorage.getItem("user")) {
    printLogOutBtn();
    } else {
        printLogInBtn();
    }
    
loginBtn.alt = "Logga in";
loginBtn.style.marginBottom = "20px";

loginBtn.addEventListener("click", () => {

    //  Här måsta jag fetcha och få svar med userns id (med input osv) 

    localStorage.setItem("user", JSON.stringify("mittlösenord"));
    printLogOutBtn();
 
    function printLogOutBtn() {
        loginBtn.innerText = "Logga ut";
    }
})
    function printLogInBtn() {
        logInBtn.innerText = "Logga in";
    }


/*

function printLoginForm() {
    userForm.innerHTML = "";                    // Jag måste tömma tidigare saker så att det inte blir dubletter.
    let inputEmail = document.createElement("input");
    inputEmail.placeholder = "E-post";

    let inputPassword = document.createElement("input");
    inputPassword.placeholder = "Lösenord"; 

    inputPassword.type = "password";
    let loginBtn = document.createElement("button");
    loginBtn.innerText = "Logga in";

    loginBtn.addEventListener("click", () => {
        let sendUser = {email: inputEmail.value, password: inputPassword.value};        // kolla video 19 jan 02.39
        fetch("http://localhost:3000/login", {method : "POST",
        headers: { 
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(sendUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log("post user", data);

// Om användaren har loggat in - isåfall vill vi spara honom i localStorage:

            if (data.user) { 
                localStorage.setItem("user", data.user)               
                printLogoutBtn()                            // Skriver ut logga ut -knappen.
            }   else {                                      // om det inte gick igenom. Inloggningen funkade inte
                alert("Fel inlogg");                        

            }
        });
    });
// Du kan se att den är sparad i localStorage om du i konsolen går till lagring. Där orde det stå vilken user id som är lagrad där.
    // Skicka allt detta till domen:
    userForm.append(inputEmail, inputPassword, loginBtn);
}

// ----------------- PRINT LOGOUT BUTTON -------------------------- //

function printLogoutBtn() {
    userForm.innerHTML = "";                                    // Jag måste tömma tidigare saker så att det inte blir dubletter.

    let logoutBtn = document.createElement("button");           // Skapar min knapp
    logoutBtn.innerText = "Logga ut";

    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("user");                        // Ta bort user från localStorage
        printLoginForm();                                       // Visa formuläret igen.

    });

    userForm.appendChild(logoutBtn);

}
*/

/*

// LOGGA IN ELLER UT
loginBtn.addEventListener("click", () => {

    // VI HAR FETCHAT OCH FÅTT SVAR MED USERNS ID

    if (localStorage.getItem("user")) {
        localStorage.removeItem("user")
        list.innerHTML = "";
        printLoginBtn();
    } else {
        localStorage.setItem("user", JSON.stringify("qwer1234"));
        getProdCat();
        printLogOutBtn();
    }
    

})



function printLogOutBtn() {
    loginBtn.innerText = "Logga ut";
}

function printLoginBtn() {
    loginBtn.innerText = "Logga in";
}
*/