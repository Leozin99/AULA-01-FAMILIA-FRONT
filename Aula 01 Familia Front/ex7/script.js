function calcularReajuste() {
    const salarioAtual = Number(document.getElementById('salarioAtual').value);

    let aumento = 0;
    let percentual = 0;

    if (salarioAtual >= 1500 && salarioAtual < 1750) {
        percentual = 15; 
        aumento = salarioAtual * 0.15;
    } else if (salarioAtual >= 1750 && salarioAtual < 2000) {
        percentual = 12;
        aumento = salarioAtual * 0.12;
    } else if (salarioAtual >= 2000 && salarioAtual < 3000) {
        percentual = 9; 
        aumento = salarioAtual * 0.09;
    } else if (salarioAtual >= 3000) {
        percentual = 6;
        aumento = salarioAtual * 0.06;
    }

    const novoSalario = salarioAtual + aumento;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ` Salário Atual: R$ ${salarioAtual.toFixed(2)}<br> Aumento: R$ ${aumento.toFixed(2)} (${percentual}%)<br> Novo Salário: R$ ${novoSalario.toFixed(2)}`;
}
