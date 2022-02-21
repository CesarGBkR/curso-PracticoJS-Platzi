//Helper functions

function calcularMediaa(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, elementoNuevo) {
            return valorAcumulado + elementoNuevo;
            
        }
    );

    const promedioL = sumaLista / lista.length;

    return promedioL;
}

function esPar(numerioto) {
    return  (numerioto % 2 === 0)
}

//////////////////////////////////


//Calculadora de medoia

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)) {
        const personitaMitad1 = lista[mitad -1]
        const personitaMitad2 = lista[mitad]
        const mediana = calcularMediaa([personitaMitad1, personitaMitad2]);
        return mediana
    }
    else{
        const personitaMitad = lista[mitad];
        return personitaMitad
    }
}

//Calculando la Mediana General

const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);

const salariosColSort = salariosCol.sort(
    function (salarioA, salarioB) {
        return salarioA - salarioB
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSort);

//Mediana Top 10% Col

const spliceStart = (salariosColSort.length * 90) / 100;
const spliceFinal = salariosColSort.length - spliceStart;

const salariosColTop10 = salariosColSort.splice(

    spliceStart,
    spliceFinal,
);

const medianaTop10Col = medianaSalarios(salariosColTop10)



///////////////////////////////////////
console.log({
    medianaGeneralCol, 
    medianaTop10Col

});