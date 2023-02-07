function gerarTabuada(){
    let numero = document.getElementById('numero');
    let tabuada = document.getElementById('tabuada');

    if (numero.value.length == 0){
        alert('Por Favor! digite um número!');
    } else {
        let num = Number(numero.value);
        tabuada.innerHTML = '';
        for (let cont = 1; cont <= 10; cont ++){
            let item = document.createElement('option');
            item.text = `${num} x ${cont} = ${num * cont}`;
            item.value = `tab${cont}`;
            tabuada.appendChild(item);
        }
    }  
}