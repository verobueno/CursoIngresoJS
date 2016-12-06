function Mostrar()
{
	

	var indice;
	var divisor=0;
	var numeroIngresado=prompt("ingrese un numero: ");
	numeroIngresado=parseInt(numeroIngresado);
	

	for(indice=1; indice <numeroIngresado ;indice++)
	{
		if (numeroIngresado%indice==0)
		{
			
			divisor ++;
		}
	
	}

	if ( indice==0)
	{
		document.write("El numero ingresado es primo " + numeroIngresado);
	}
	

}//FIN DE LA FUNCIÓN