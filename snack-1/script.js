var lista = []
var somma = 0

for(var i=0; i<5; i++){
  lista[i] = parseInt(prompt('Inserisci un numero'))

  somma += lista[i]
}

console.log(somma)