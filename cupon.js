
function descuento(precioOriginal, descuento){
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajePrecioDescuento) / 100;
    
    return precioConDescuento;
}

function rpi(finalprice){
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + finalprice;
}

function clicki(){
    const inputPrice = document.getElementById("inputPrices");
    const priceValue = inputPrice.value;

    const inputCupon = document.getElementById("inputCupon");
    const cupontValue = inputCupon.value;
    const resultP = document.getElementById("ResultP");
    
    switch(cupontValue){
        case "descuento10":
            var precioConDescuento = descuento(priceValue, 10);
            var finalprice = rpi(precioConDescuento);
            finalprice
            break;

        case "descuento20":
            var precioConDescuento2 = descuento(priceValue, 20);
            var finalprice2 = rpi(precioConDescuento2);
            finalprice
            break;
            
    case "descuento30":
            var precioConDescuento = descuento(priceValue, 30);
            var finalprice = rpi(precioConDescuento);
            finalprice
            break;
            
        case "descuento40":
            var precioConDescuento = descuento(priceValue, 40);
            var finalprice = rpi(precioConDescuento);
            finalprice
            break;

        case "descuento50":
            var precioConDescuento = descuento(priceValue, 50);
            var finalprice = rpi(precioConDescuento);
            finalprice
            break;

        default: resultP.innerText = "El cupón no es válido";
        };
}