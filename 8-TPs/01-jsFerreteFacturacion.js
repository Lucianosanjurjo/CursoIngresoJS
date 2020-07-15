/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;

    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUno = parseInt (precioUno);
    precioDos = parseInt (precioDos);
    precioTres = parseInt (precioTres);

    suma = precioUno + precioDos + precioTres;

    alert (suma);

}
function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var promedio;

    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUno = parseInt (precioUno);
    precioDos = parseInt (precioDos);
    precioTres = parseInt (precioTres);

    promedio = (precioUno + precioDos + precioTres)/3;

    alert (promedio);

}
function PrecioFinal () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var totalSinIva;
    var iva;
    var totalMasIva;

    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;
    iva = 0.21;

    precioUno = parseInt (precioUno);
    precioDos = parseInt (precioDos);
    precioTres = parseInt (precioTres);

    totalSinIva = precioUno + precioDos + precioTres;

    iva = totalSinIva * 0.21;

    totalMasIva = totalSinIva + iva;


    alert (totalMasIva);

}