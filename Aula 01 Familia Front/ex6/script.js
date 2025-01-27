function verificarMaiorEMenor() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);

    const maior = Math.max(num1, num2);
    const menor = Math.min(num1, num2);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Maior número: ${maior}<br> Menor número: ${menor}`;
}
