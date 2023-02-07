function contarNumero() {
    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let passo = document.getElementById('passo');
    let result = document.getElementById('res');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        result.innerHTML = 'Impossível contar!';
    } else {
        result.innerHTML = 'Contando: <br>';
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if (p <= 0){
            alert('Passo Inválido!! Considerando PASSO 1');
            p = 1;
        }
        
        if (i < f){
            // CONTAGEM CRESCENTE
            for (let c = i; c <= f; c += p){
                result.innerHTML += `${c} ➡`;
            }
        } else {
            // CONTAGEM DECRESCENTE
            for (let c = i; c >= f; c += p){
                result.innerHTML += `${c} ➡ `;
            }
        }
        result.innerHTML += '🏁';
    }
}