//------------------------VARIABILI---------------------------
var singleStudent = document.getElementById("single-student");
var studentsList = document.getElementById("students-list");
var button = document.getElementById("button");
var newStudentsList = document.getElementById("new-students-list");
var click = false;
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
    }
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

//--------------------------FUNZIONI--------------------------
// Crea un oggetto (nome, cognome, età) ed aggiungilo ad un array
function pushObjectsInArray(object, array) {

    // Messaggi per l'utente
    var nameMessage = "Inserisci il tuo nome.";
    var surnameMessage = "Inserisci il tuo cognome.";
    var ageMessage = "Inserisci la tua età.";

    // Chiedi all'utente di inserire il proprio nome
    do {
        var userName = prompt(nameMessage);
        if (!isNaN(userName) || userName.trim().length == 0) {
            nameMessage = "Il nome inserito non è valido.\nInserisci il tuo nome.";
        } else {
            object.name = userName[0].toUpperCase() + userName.substring(1).toLowerCase();
        }
    } while (!isNaN(userName) || userName.trim().length == 0)

    // Chiedi all'utente di inserire il proprio cognome
    do {
        var userSurname = prompt(surnameMessage);
        if (!isNaN(userSurname) || userSurname.trim().length == 0) {
            surnameMessage = "Il cognome inserito non è valido.\nInserisci il tuo cognome.";
        } else {
            object.surname = userSurname[0].toUpperCase() + userSurname.substring(1).toLowerCase();
        }
    } while (!isNaN(userSurname) || userSurname.trim().length == 0)

    // Chiedi all'utente di inserire la propria età
    do {
        var userAge = parseInt(prompt(ageMessage));
        if (isNaN(userAge) || userAge.length == 0) {
            ageMessage = "L'età inserita non è valida.\nInserisci la tua età.";
        } else {
            object.age = userAge;
        }
    } while (isNaN(userAge) || userAge.length == 0)

    // Aggiungi il nuovo oggetto all'array
    array.push(object)

}
//-------------------------/FUNZIONI--------------------------


// Stampa su HTML tutte le proprietà presenti nell'oggetto "student"
for (var key in student) {
    singleStudent.innerHTML += "<li>" + key + " = " + student[key] + "</li>";
}

// Stampa su HTML nome e cognome di ciascuno studente presente nell'array "students"
for (var i = 0; i < students.length; i++) {
    studentsList.innerHTML += "<li>" + students[i].name + " " + students[i].surname + "</li>";
}

// Al click del pulsante "button" si può aggiungere uno studente
button.addEventListener("click", function(){

    // Se il pulsante "button" non è mai stato cliccato
    if (!click) {

        // Evoca la funzione per interagire con l'utente
        pushObjectsInArray(newStudent, students);

        // Stampa su HTML nome e cognome di ciascuno studente presente nell'array "students" aggiornato
        for (var e = 0; e < students.length; e++) {
            newStudentsList.innerHTML += "<li>" + students[e].name + " " + students[e].surname + "<br>Età = " + students[e].age + " anni</li>";
        }

        // Attiva il pulsante "button"
        click = true;

    } else {

        // Evoca la funzione per interagire con l'utente
        pushObjectsInArray(newStudent, students);

        // Stampa su HTML nome e cognome solo del nuovo studente
        newStudentsList.innerHTML += "<li>" + students[students.length - 1].name + " " + students[students.length - 1].surname + "<br>Età = " + students[students.length - 1].age + " anni</li>";

    }

});

// Al click del pulsante "reset" si pulisce la nuova lista studenti
reset.addEventListener("click", function(){

    // Se il pulsante "button" è stato già cliccato
    if (click) {

        // Svuota nuova lista studenti
        newStudentsList.innerHTML = "";

        // Ripristina la lista studenti originale
        students = [
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
            }
        ];

        // Disattiva il pulante "button"
        click = false;

    }

});