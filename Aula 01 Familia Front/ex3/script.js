function calcularAumento() {
    const nomeMercadoria = document.getElementById('nomeMercadoria').value;
    const precoMercadoria = Number(document.getElementById('precoMercadoria').value);

    let aumento = 0;
    let precoNovo = 0;

    if (precoMercadoria < 1000) {
        aumento = precoMercadoria * 0.05; 
    } else {
        aumento = precoMercadoria * 0.07;
    }

    precoNovo = precoMercadoria + aumento;

    resultado.innerHTML = `<p><strong>Mercadoria:</strong> ${nomeMercadoria}</p> <p><strong>Novo preço:</strong> R$ ${precoNovo.toFixed(2)}</p>`;
}
