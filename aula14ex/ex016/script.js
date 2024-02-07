function clicar() {
// primeira vez usando let no lugar de var
let inicio = document.getElementById('inicio')
let fim = document.getElementById('fim')
let passos = document.getElementById('passos')
let output = document.querySelector('div#output')
    if (inicio.value.length ==   0 || fim.value.length == 0 || passos.value.length == 0 ) {
        window.alert('Insira os dados')
    }
    else {
        window.alert('dados inseridos')
        output.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)


        if (i < f) {
            for (let contador =  i; contador <= f ; contador += p ){
                output.innerHTML += `${contador} \u{1F449}`
            }
            output.innerHTML += `\u{1F3C1}`
        }
        else {
            for (let contador = i; contador >= f ; contador -= p) {
                output.innerHTML += `${contador} \u{1F449}`
            } 
            output.innerHTML += `\u{1F3C1}`

    }
    }
}