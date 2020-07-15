/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	// resultado = valor * 10/100;
	// resultado = 1000 * 0.1;
	// total = 1000 + porcentaje
	// total = 1000 * 1.1

	var sueldoInicial;
    var aumento;
    var sueldoConAumento;


    sueldoInicial = txtIdSueldo.value;
    aumento = 0.1;


	sueldoInicial = parseInt(sueldoInicial);
	
	alert ("se aplico un aumento del " + aumento);

	sueldoConAumento = sueldoInicial + sueldoInicial * aumento;
	
	txtIdResultado.value = sueldoConAumento;
	
	
	

}
