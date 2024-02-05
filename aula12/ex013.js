var agora = new Date
var diaSem = agora.getDay()
/*
0   D/omingo
1   Segunda
2   Terça
3   Quarta
4   Quinta
5   Sexta 
6   Sábado
*/

//console.log(diaSem) //Mostra o dia da semana em número


//switch é bom para dados pontunais, não intervalos
switch(diaSem) {
    case 0:
    console.log('Domingo')
    break
    case 1:
    console.log('Segunda')
    break
    case 2:
    console.log('Terça')
    break
    case 3:
    console.log('Quarta')
    break
    case 4:
    console.log('Quinta')
    break
    case 5:
    console.log('Sexta')
    break
    case 6:
    console.log('Sábado')
    break
    default:
    console.log('Data não Encontrada')
    //break opcional
}