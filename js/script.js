/*
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.
*/

//------------------------VARIABILI---------------------------
var singleStudent = document.getElementById("single-student");
var studentsList = document.getElementById("students-list");
var nameMessage = "Inserisci il tuo nome.";
var surnameMessage = "Inserisci il tuo cognome.";
var ageMessage = "Inserisci la tua età.";
//------------------------/VARIABILI--------------------------

//--------------------------ARRAY-----------------------------
var students = [
    {
        name: "Giuseppe",
        surname: "Rossi",
        age: 27
    },
    {
        name: "Giovanni",
        surname: "Ferrari",
        age: 30
    },
    {
        name: "Antonio",
        surname: "Russo",
        age: 22
    },
    {
        name: "Mario",
        surname: "Bianchi",
        age: 25
    },
    {
        name: "Carlo",
        surname: "Romano",
        age: 34
    },
    {
        name: "Anna",
        surname: "Gallo",
        age: 19
    },
    {
        name: "Giuseppina",
        surname: "Costa",
        age: 21
    },
    {
        name: "Rosa",
        surname: "Fontana",
        age: 29
    },
    {
        name: "Maria",
        surname: "Conti",
        age: 33
    },
    {
        name: "Federica",
        surname: "Esposito",
        age: 31
    },
];
//--------------------------/ARRAY----------------------------

//--------------------------OGGETTI---------------------------
var student = {
    name: "Giuseppe",
    surname: "Rossi",
    age: 27
};
//--------------------------/OGGETTI--------------------------

// Stampare su HTML tutte le proprietà dell'oggetto "student"
for (var key in student) {
    singleStudent.innerHTML += "<li>" + key + " = " + student[key] + "</li>";
}

// Stampare su HTML nome e cognome di ciascuno studente presente nell'array "students"
for (i = 0; i < students.length; i++) {
    studentsList.innerHTML += "<li>" + students[i].name + " " + students[i].surname + "</li>";
}

// Richiesta all'utente di aggiungere il proprio nome
do {
    var userName = prompt(nameMessage);
    if (!isNaN(userName) || userName.trim().length == 0) {
        nameMessage = "Il nome inserito non è valido.\nInserisci il tuo nome."
    }
} while (!isNaN(userName) || userName.trim().length == 0)

// Richiesta all'utente di aggiungere il proprio cognome
do {
    var userSurname = prompt(surnameMessage);
    if (!isNaN(userSurname) || userSurname.trim().length == 0) {
        surnameMessage = "Il cognome inserito non è valido.\nInserisci il tuo cognome."
    }
} while (!isNaN(userSurname) || userSurname.trim().length == 0)

// Richiesta all'utente di aggiungere la propria età
do {
    var userAge = prompt(ageMessage);
    if (isNaN(userAge) || userAge.trim().length == 0) {
        ageMessage = "L'età inserita non è valida.\nInserisci la tua età."
    }
} while (isNaN(userAge) || userAge.trim().length == 0)

