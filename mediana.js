//let mediana;

function calcularMediaa(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, elementoNuevo) {
            return valorAcumulado + elementoNuevo;
            
        }
    );

    const promedioL = sumaLista / lista.length;

    return promedioL;
}

function esPar(numero) {
    if(numero % 2 ===  0){
        return true;
    }
    else{
        return false;
    }

}
function medianaFinal(lista1) {
    let mediana;
    const listao = lista1.sort();
    const mitadL = parseInt(listao.length / 2);
    
    if(esPar(listao.length)) {

        const elemeto1 = listao[mitadL];
        const elemeto2 = listao[mitadL -1];
    
        const promedioE1y2 = calcularMediaa([
            elemeto1,
            elemeto2,
        ]);
        mediana = promedioE1y2;
        return mediana;
    }
    else{
        mediana = lista1[mitadL];
        return mediana;
    }
}

