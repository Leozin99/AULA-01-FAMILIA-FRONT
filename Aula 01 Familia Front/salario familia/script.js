function reajustar() {
    let salario = Number(document.getElementById('salario').value);
    let resultado = document.getElementById('resultado');
    let filho = Number(document.getElementById('filhos').value);
    let salariofinal;

    if (salario <= 2000) {
        salariofinal = salario + (filho * 45);
    } else {
        salariofinal = salario;
    }

    resultado.innerHTML = `Salário final R$ ${salariofinal.toFixed(2)}`;
}
