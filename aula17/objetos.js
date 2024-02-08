let amigo = {nome:'Antony',
 sexo:'M',
 peso:60.1,
 engordar(p = 0) {
    console.log('Engordou')
    this.peso += p
 }
}
// [] array (q em JS é um objeto)
// {} obejto
amigo.engordar(5)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)