/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldoInicial;
	var descuento;
	var sueldoConDescuento;

	sueldoInicial = txtIdImporte.value;
	descuento = 0.25;

	sueldoInicial = parseInt(sueldoInicial);

	sueldoConDescuento = sueldoInicial - sueldoInicial * descuento;

	alert ("se aplico un descuento del " + descuento);

	txtIdResultado.value = sueldoConDescuento;

	
}
