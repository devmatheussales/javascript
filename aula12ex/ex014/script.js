function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML= `Agora são ${hora} Horas`
    if (hora >= 0 && hora <12 ){

        img.src = './images/morning.jpg'
        document.body.style.background = '#e2cd9f'
        // bom dia
    }
    else if ( hora > 12 && hora < 18) {
        // boa tarde
        
        img.src = './images/afternoon.png'
        document.body.style.background = '#b9846f'
        
    }
    else {
        //boa noite
        
        img.src = './images/night.png'
        document.body.style.background = '#515154'
        
    }
}