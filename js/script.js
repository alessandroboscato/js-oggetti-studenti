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
  },
  {
    "nome": "luca",
    "cognome": "medio",
  },
  {
    "nome": "lucia",
    "cognome": "alta",
  }
];

for (var i = 0; i < classe.length; i++) {
  for (var key in classe[i]) {
    console.log(key + ": " + classe[i][key]);
  }
}

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
