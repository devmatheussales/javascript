var idade = 18
console.log(`você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não Vota')
}
else if (idade <= 18 || idade >= 70){
        console.log('Voto opcional')
    }
else {
    console.log('Voto Obrigatorio')
}