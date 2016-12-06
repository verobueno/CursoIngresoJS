function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var NumeroIngresado;

	while ( contador < 5 )
	{

		contador++;
		numeroIngresado=prompt("Ingrese numero" + contador);
		numeroIngresado=parseInt(numeroIngresado); //parseo el numero ingresado, me aseguro que es un numero
		acumulador=acumulador+numeroIngresado; // no parseo el acumulador porque ya lo inicialice como numero

	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN