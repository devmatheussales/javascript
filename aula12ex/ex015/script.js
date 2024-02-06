function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('txtano')
    var resultado = document.getElementById('resultado')

    if (formAno.value.length == 0 || formAno.value > ano)
        window.alert('Verifique seus dados!')

    else {
        var formSex = document.getElementsByName('radiosex') //[0,1]
        var idade = ano - Number(formAno.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (formSex[0].checked) {
            gender = 'Homem'
            if (idade >= 0 && idade <= 12) {
                //criança
                img.setAttribute('src', './images/picture-kid-m.jpg ')
            }
            else if (idade <= 50) {
                //Jovem
                img.setAttribute('src', './images/picture-adult-m.jpg ')
            }
            else  {
                //Idoso
                img.setAttribute('src', './images/picture-old-m.jpg ')
            }
            
        }
        else if (formSex[1].checked) {
            gender = 'Mulher'
            if (idade >= 0 && idade <= 12) {
                //criança
                img.setAttribute('src', './images/picture-kid-f.jpg')
            }
            else if (idade <= 50) {
                //Jovem
                img.setAttribute('src', './images/picture-adult-f.png')
            }
            else  {
                //Idoso
                img.setAttribute('src', './images/picture-old-f.jpg')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerText = `Detectados ${gender} com ${idade} anos.`
        resultado.appendChild(img)
    
    }
}

