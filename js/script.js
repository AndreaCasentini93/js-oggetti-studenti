/*
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.
*/

//------------------------VARIABILI---------------------------
var singleStudent = document.getElementById("single-student");
//------------------------/VARIABILI--------------------------

//--------------------------ARRAY-----------------------------

//--------------------------/ARRAY----------------------------

//--------------------------OGGETTI---------------------------
var student = {
    name: "Giuseppe",
    surname: "Rossi",
    age: 27
};
//--------------------------/OGGETTI--------------------------

//Stampare su HTML tutte le proprietà dell'oggetto "student"
for (var key in student) {
    singleStudent.innerHTML += "<li>" + key + " = " + student[key] + "</li>";
}

