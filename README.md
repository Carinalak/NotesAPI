# Specifikationer 😎

- Jag använder MAMP MySql databas: port: "3306", user: "notes", password: "notes", database: "notes".

- Min databas heter notes och har en tabell i sig som heter notesuser. Notes innehåller: id, name, note, userId, notes, created och done. notesuser innehåller: userId, name, email och password.

- Jag har en lib -mapp med en conn.js fil där jag lagt adressen och lösenorden m.m. till databasen.

- Min frontend är delvis uppbyggd med moduler.

- Det finns en enkel inloggning, med en knapp där lösenordet sparas i localStorage och det är inte krypterat.
 (Jag byggde en databas för users och gjorde en korrekt inloggnings- endpoint krypterad med CryptoJS som förberedande del, men hann inte göra klart det i Frontenden.)

 ## Installationer: 🔧
- Express
- nodemon
- MySql
- Jag bifogar en mindre export av databasen i inlämningslådan.


## För att köra projektet, skriv vid start i backenden: 
- npm i mysql2  
- npx nodemon start  

 ## Buggar 🐛 🪲 

- Det finns en del buggar som rör knapparna i frontenden, men alla knappar fungerade i början, ju fler nya saker jag lade till, desto buggigare blev det, det går inte att reparera, jag har försökt många gånger, men så fort jag får en sak att fungera, slutar en annan att fungera istället. T.ex fungerade redigering av ett dokument i frontend när jag gjorde klart den i början, men i slutet när jag höll på med knapparna, slutade den att fungera och jag kan inte få tillbaka funktionaliteten hur mycket jag än provar. När jag öppnar ett dokument öppnas det korrekt i redigeringsvyn som jag vill, men när det sedan sparas, uppdateras det inte som det gjorde i början, utan det blir till ett nytt dokument istället, och det jag redigerade finns kvar. På något ställe verkar notes- listan bli dubbel, men detta händer bara ibland.  

- Alla endpoints i backend fungerar. Jag har användt test.rest filen till att testa dem. 👍


# Inlämningsuppgift: Notes 

Vi bygger ett dokumenthanteringssystem med en relationsdatabas!

Bakgrund

Du har fått en kund som vill bygga ett eget system för att skapa digitala dokument och önskar att se en demo på detta.
Kunden vill kunna logga in på sitt system, där se en lista på alla skapade dokument, kunna skapa nya och redigera de som redan finns där. När kunden tittar på ett skapat dokument så skall det finnas möjlighet att se dokumentet både “live” dvs utan redigeringsläget samt att se dokumentet i redigeringsläge.

Tekniska krav

Det skall finnas en inloggning, men nivån på säkerhet för prototyp bestämmer du själv (dokumentera hur du har valt att göra). 
Dokument skall skapas och sparas i en MySql databas.
Projektet skall utformas som en headless applikation, dvs med ett frontend projekt och ett API.
För dokument skall det finnas en enkel redigering, där det går att skriva och ändra text. 
Ett dokument skall kunna visas i både redigerings och “vanligt” läge.
Förutom dessa tekniska krav är resten utav arkitekturen upp till dig. 
VG Krav

Det skall gå att skapa nya användare som kan skapa sina egna dokument. Och enbart se sina skapade dokument.
Det skall finnas en WYSIWYG editorn där det går att ändra både textfärg och bakgrundsfärg i editorn, samt att det skall gå att spara. 
Du skall även bifoga ett enklare dokument som visar hur databasen och dess relationer är konstruerat. 
 

Inlämning

Projektet skall genomföras enligt headless principen men skapa strukturen för projektet i ett repo. Dvs i rooten kommer du ha en mapp som heter tex “frontend” och en mapp som heter “backend”. Dokumentera i readme.md hur projektet startas och är uppbyggt.

Bifoga även en databasdump (export) med lite innehåll så att projektet går att testa.
Samt dokumentera användarnamn och lösenord för databasen.

(Denna gång är repot tomt. Så ni får själva skapa er struktur enligt ovan och er readme fil)
