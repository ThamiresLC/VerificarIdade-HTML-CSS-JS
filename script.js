function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
   if (fano.value.length == 0 || Number(fano.value) > ano){
       alert('[ERRO ]Verifique os dados e tente novamente!')
   }else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'img')
    if(fsex[0].checked){
        genero = 'homem'
        if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'criancaH.jpg')
        }else if (idade < 26){
            //Jovem
            img.setAttribute('src', 'hJovem.jpg')
        } else if (idade < 40){
            //adulto
            img.setAttribute('src', 'homem.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'idoso.png')
        }

    }else if (fsex[1].checked){
        genero = 'mulher'
        if (idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'criancaM.jpg')
        }else if (idade < 26){
            //Jovem
            img.setAttribute('src', 'mjJovem.jpg')
        } else if (idade < 40){
            //adulto
            img.setAttribute('src', 'mulher.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'idosa.jpg')
        }
    }

    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
   
   }
}