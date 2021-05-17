function verificar(){
    var fano = document.getElementById('txtano')
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano || fano.value <= 1900){
        window.alert('Verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        if (fsex[0].checked){
            genero = 'Homem'

            if(idade <= 10){
                img.setAttribute('src', 'crianca_m.png')
            } else if (idade < 22){
                img.setAttribute('src', 'jovem_m.png')
            } else if(idade < 60){
                img.setAttribute('src', 'adulto_m.png')
            } else{
                img.setAttribute('src', 'idoso_m.png')
            }
        }else{
            genero = 'Mulher'

            if(idade <= 10){
                img.setAttribute('src', 'crianca_f.png')
            } else if (idade < 22){
                img.setAttribute('src', 'jovem_f.png')
            } else if(idade < 60){
                img.setAttribute('src', 'adulto_f.png')
            } else{
                img.setAttribute('src', 'idoso_f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}