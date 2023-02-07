function verificarIdade(){
    let anoNasc = document.getElementById('anoNascimento');
    let sexo = document.getElementsByName('sexo');
    let result = document.getElementById('res');
    let data = new Date();
    let anoAtual = data.getFullYear();

    if (anoNasc.value > anoAtual || anoNasc.value < 1900) {
        alert('[ERRO] Verifique os dados e tente novamente!!');
    } else {
        let idade = anoAtual - anoNasc.value;
        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (sexo[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'menino.jpg');
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'jovemH.jpg');
            } else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', 'homem.jpg');
            } else {
                // IDOSO
                img.setAttribute('src', 'idoso.jpg');
            }
        } else {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                // CRIANÇA
                img.setAttribute('src', 'menina.jpg');
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'jovemM.jpg');
            } else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', 'mulher.jpg');
            } else {
                // IDOSO
                img.setAttribute('src', 'idosa.jpg');
            }
        }
        result.style.textAlign = 'center';
        result.innerHTML = `Detectamos: ${genero} com ${idade} anos.`;
        result.appendChild(img);
    }
}