function identificarTriangulo() {
    const ladoA = parseFloat(document.getElementById('ladoA').value);
    const ladoB = parseFloat(document.getElementById('ladoB').value);
    const ladoC = parseFloat(document.getElementById('ladoC').value);

    let tipoTriangulo = '';

    if (ladoA === ladoB && ladoB === ladoC) {
        tipoTriangulo = 'Equilátero: Todos os lados são iguais.';
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
        tipoTriangulo = 'Escaleno: Todos os lados são diferentes.';
    } else {
        tipoTriangulo = 'Isósceles: Dois lados são iguais.';
    }

    document.getElementById('tipoTriangulo').textContent = tipoTriangulo;
}
