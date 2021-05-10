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
var newStudentsList = document.getElementById("new-students-list");
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
var newStudent = {};
//--------------------------/OGGETTI--------------------------

// Stampa su HTML tutte le proprietà presenti nell'oggetto "student"
for (var key in student) {
    singleStudent.innerHTML += "<li>" + key + " = " + student[key] + "</li>";
}

// Stampa su HTML nome e cognome di ciascuno studente presente nell'array "students"
for (var i = 0; i < students.length; i++) {
    studentsList.innerHTML += "<li>" + students[i].name + " " + students[i].surname + "</li>";
}

// Richiedi all'utente di inserire il proprio nome
do {
    var userName = prompt(nameMessage).toLowerCase();
    newStudent.name = userName[0].toUpperCase() + userName.substring(1);
    if (!isNaN(newStudent.name) || newStudent.name.trim().length == 0) {
        nameMessage = "Il nome inserito non è valido.\n" + nameMessage;
    }
} while (!isNaN(newStudent.name) || newStudent.name.trim().length == 0)

// Richiedi all'utente di inserire il proprio cognome
do {
    var userSurname = prompt(surnameMessage).toLowerCase();
    newStudent.surname = userSurname[0].toUpperCase() + userSurname.substring(1);
    if (!isNaN(newStudent.surname) || newStudent.surname.trim().length == 0) {
        surnameMessage = "Il cognome inserito non è valido.\n" + surnameMessage;
    }
} while (!isNaN(newStudent.surname) || newStudent.surname.trim().length == 0)

// Richiedi all'utente di inserire la propria età
do {
    newStudent.age = parseInt(prompt(ageMessage));
    if (isNaN(newStudent.age) || newStudent.age.length == 0) {
        ageMessage = "L'età inserita non è valida.\n" + ageMessage;
    }
} while (isNaN(newStudent.age) || newStudent.age.length == 0)

// Aggiungi il nuovo oggetto "newStudent" all'array "students"
students.push(newStudent)

// Stampa su HTML nome e cognome di ciascuno studente presente nell'array "students" aggiornato
for (var e = 0; e < students.length; e++) {
    newStudentsList.innerHTML += "<li>" + students[e].name + " " + students[e].surname + "</li>";
}