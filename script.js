function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'imgdia.Webp'
        document.body.style.backgroundColor = '#d9b559'

    } else if (hora >= 12 && hora <=18) {
        //boa tarde
        img.src = 'imgtarde.Webp'
        document.body.style.backgroundColor = '#e97f2c'

    } else {
        //boa noite
        img.src = 'teste.Webp'
        document.body.style.backgroundColor = '#756096'
    }
}