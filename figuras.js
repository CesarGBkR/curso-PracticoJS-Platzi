//Este es código del cuadrado

console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
}
perimetroCuadrado()

function areaCuadrado(lado){
    return lado * lado;
}
areaCuadrado()

console.groupEnd();

//Este es el código del triangulo

console.group("Triangulos");

function perimetrotriangulo(ladotriangulo, ladotriangulo2, baseTriangulo) {
    return ladotriangulo + ladotriangulo2 + baseTriangulo;
} 

function areatriangulo(baseTriangulo, alturaTriangulo) {
    return (baseTriangulo * alturaTriangulo) / 2;
}

console.groupEnd();

//Este es el código del Circulo

console.group("Circulos");

function diametroCirculo(radioCirculo){
    return radioCirculo * 2;
}

const PI = Math.PI;

function perimetroCirculo(radioCirculo){
    const diametro = diametroCirculo(radioCirculo);
    return diametro * PI;
}

function areaCirculo(radioCirculo){
    return (radioCirculo * radioCirculo) * PI;
} 

console.groupEnd();

//Empezamos con el código en JS enlazado al HTM para dar utilidad a los botones

function calcularPerimetroCuadrado(){
    
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado(){
    
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(perimetro);

}