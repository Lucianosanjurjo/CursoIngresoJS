/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	numeroUno = parseInt (numeroUno);
	numeroDos = parseInt (numeroDos);

	suma = numeroUno + numeroDos;

	alert (suma);


}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resta;
	
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;
	
	resta = numeroUno - numeroDos;

	alert (resta);

}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var multiplicacion;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	multiplicacion = numeroUno * numeroDos;

	alert (multiplicacion);

}

function dividir()
{
	var numeroUno;
	var numeroDos;
	 var divicion;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	divicion = numeroUno / numeroDos;

	alert (divicion);
	


}

