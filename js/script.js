$(document).ready(function () {
  //LOGICA

  // Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
  var studente = {
    "nome": "carlo",
    "cognome": "basso",
  };

  for(var key in studente) {
    console.log(key + ": " + studente[key]);
  }

  // Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

  var classe = [
    {
      "nome": "carlo",
      "cognome": "basso",
      "eta": 25
    },
    {
      "nome": "luca",
      "cognome": "medio",
      "eta": 27
    },
    {
      "nome": "lucia",
      "cognome": "alta",
      "eta": 29
    }
  ];

  for (var i = 0; i < classe.length; i++) {
    for (var key in classe[i]) {
      console.log(key + ": " + classe[i][key]);
    }
  }

  // Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

  var newName = prompt("Inserisci il nome dello studente");
  var newSurname = prompt("Inserisci il cognome dello studente");
  var newAge = prompt("Inserisci l'età dello studente");

  //RAPPRESENTAZIONE GRAFICA - HANDLEBARS
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var newStudent = {
    "name": newName,
    "surname": newSurname,
    "age": newAge
  };
  var html = template(newStudent);
  $("#app").append(html);
});
