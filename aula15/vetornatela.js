let valores = [8, 1, 7, 4, 2, 9]

for (let posicao = 0; posicao < valores.length; posicao++) {
    console.log(`A posição ${posicao} tem o valor:  ${valores[posicao]}`)
}

for (let posicao in valores) {
    console.log(`A posição ${posicao} tem o valor:  ${valores[posicao]}`)
}

let num = [5, 8, 2, 9, 3]
num.sort()
num.push(1)

let posicao = num.indexOf(8)
console.log(`O valor 8 está na posição ${posicao}`)