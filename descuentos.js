
function descuento(precioOriginal, descuento){
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajePrecioDescuento) / 100;
    
    return precioConDescuento;
}


function onClickB(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = descuento(priceValue, discountValue);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
}