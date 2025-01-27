function encontrarMaiorNumero() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const num3 = parseInt(document.getElementById('num3').value);
    const num4 = parseInt(document.getElementById('num4').value);
    const num5 = parseInt(document.getElementById('num5').value);
    const num6 = parseInt(document.getElementById('num6').value);

    const numeros = [num1, num2, num3, num4, num5, num6];

    const maiorNumero = Math.max(...numeros);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O maior número é: ${maiorNumero}</p>`;
}
