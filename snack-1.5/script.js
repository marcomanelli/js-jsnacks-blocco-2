var lista = []
var somma = 0
var i = 0

while(i < 5){
  lista[i] = parseInt(prompt('Inserisci un numero'))

  somma += lista[i]
  
  i++
}

console.log(somma)