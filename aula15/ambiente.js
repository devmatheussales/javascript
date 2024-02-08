/*
 Vetores 

"Um array é uma variável composta que tem vários elementos. Cada elemento é composto por seu valor e por uma chave (key) de identificação". 
*/

let num = [5, 8, 2, 9, 3]


num[3] = 6  // adicionar mais um elemento no array sem perder os outros, [3] indica a posição 
num.push(7) // adcionar mais um elemento no array sem perder os outros, indo pro final
num.length  // saber o comprimento do array
num.sort()  // coloca os elementos em ordem crescente
console.log(`Nosso vetor é o ${num}`)
console.log(`Nosso vetor tem ${num.length} posicões`)
console.log(`O primeiro valor do vetor é ${num[0]}`) // não será 5 pois o sort() os orgaizou

