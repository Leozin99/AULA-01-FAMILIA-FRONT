function calcularDesconto() {

    const produto = document.getElementById('produto').value;
    const preco = Number(document.getElementById('preco').value);

    let desconto = 0;
    let precoFinal = preco;

    if (produto === 'camisa') {
        desconto = 0.20; 
    } else if (produto === 'bermuda') {
        desconto = 0.10; 
    } else if (produto === 'calca') {
        desconto = 0.15; 
    }

    
    const valorDesconto = preco * desconto;
    precoFinal = preco - valorDesconto;

    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Produto: ${produto.charAt(0).toUpperCase() + produto.slice(1)}<br> Valor Original: R$ ${preco.toFixed(2)}<br> Desconto: R$ ${valorDesconto.toFixed(2)}<br> Preço Final: R$ ${precoFinal.toFixed(2)}`;
}
