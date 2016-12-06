
function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numeroIngresado;
	var positivo=0;
	var negativo=0;
	var respuesta="si";
	var contadorCero=0;
	var contadorNegativo=0;
	var contadorPositivo=0;
	var promNegativo;
	var promPositivo;
	var diferencia;
	var contadorPar=0;

	while ( respuesta ==  "si" )
	{

		numeroIngresado=prompt("Ingrese numero " + contador );
		numeroIngresado=parseInt(numeroIngresado); 
		contador++;
		console.log(numeroIngresado);

		if (numeroIngresado>0)
		{//entra positivo
			positivo=positivo+numeroIngresado;
			contadorPositivo++;
		}
		else
		{
			if ( numeroIngresado<0 )
			{//aca entra negativo
				negativo=negativo+numeroIngresado;
				contadorNegativo++;
			}
			else
			{//aca entra cuando es 0
				contadorCero++;
			}
		}// Fin if (numeroIngresado>0)

		if ((numeroIngresado %2 == 0) && (numeroIngresado != 0) )
		{
			contadorPar++;
		}

		respuesta=prompt("ingrese si para continuar: ");
	}//fin while
	

	promPositivo=positivo/contadorPositivo;
	promNegativo=negativo/contadorNegativo;
	diferencia=positivo-negativo;
	


	document.write("<br>La suma de los negativos es: " + negativo + " y de los positivos es: " + positivo);
	document.write("<br>La cantidad de positivos es: " + contadorPositivo + " y de los negativos es: " + contadorNegativo);
	document.write("<br>La cantidad de ceros es: " + contadorCero);
	document.write("<br>El promedio de numeros positivos es: " + promPositivo + " y de los negativos es: " + promNegativo);
	document.write("<br>La diferencia entre positivos y negativos es: " + diferencia);
	document.write("<br>La cantidad de numeros pares es: " + contadorPar);

}//FIN DE LA FUNCIÓN