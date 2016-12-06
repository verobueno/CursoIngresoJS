function Mostrar()
{
	var indice;
	var numeroIngresado;
	var contador;
	var numeroPar=0;


	numeroIngresado=prompt("ingrese un numero: ")
	numeroIngresado=parseInt(numeroIngresado);
	for(indice=0;indice<numeroIngresado;indice++)
	{
		if(indice %2 == 0)
		{
			numeroPar++;
		}
	}
	document.write("la cantidad de numeros pares es: "+ numeroPar);


}//FIN DE LA FUNCIÓN