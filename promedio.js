
function calcularMediaa(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, elementoNuevo) {
            return valorAcumulado + elementoNuevo;
            
        }
    );

    const promedioL = sumaLista / lista.length;

    return promedioL;
}
