let numero = document.querySelector('input#numero');
let caixa = document.querySelector('select#caixa');
let resposta = document.querySelector('div#res');
let tudo = [];

function isNumber(num) {
    if (Number(num) >= 1 && Number(num) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(num, lista) {
    if (lista.indexOf(Number(num)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionarNum() {
    if (isNumber(numero.value) && !inLista(numero.value, tudo)) {
        tudo.push(Number(numero.value));
        let item = document.createElement('option');
        item.text = `Número ${numero.value} adicionado`;
        caixa.appendChild(item);
        resposta.innerHTML = '';
    } else {
        alert('Valor inválido ou já ncontrado na lista!');
    }
    numero.value = '';
    numero.focus();
}

function finalizarCaixa() {
    if (tudo.length == 0){
        alert('Adicione valores antes de finalizar!');
    } else {
        let total = tudo.length
        let maior = tudo[0];
        let menor = tudo[0];
        let soma = 0;
        let media = 0;

        for (let pos in tudo) {
            soma += tudo[pos];
            if (tudo[pos] > maior)
                maior = tudo[pos];
            if (tudo[pos] < menor)
                menor = tudo[pos];
        }
        media = soma / total;

        resposta.innerHTML = '';
        resposta.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
        resposta.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        resposta.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        resposta.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        resposta.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }

}