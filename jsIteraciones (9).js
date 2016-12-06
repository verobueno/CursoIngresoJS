function Mostrar()
{

	var contador=0;
	// declarar variables
	var numeroIngresado
	var respuesta='si';
	var maximo;
	var minimo;

	//while(respuesta!='no')
	while ( respuesta == "si" )
	{

		
		numeroIngresado=prompt("Ingrese numero " + contador );
		numeroIngresado=parseInt(numeroIngresado); 

			if ( contador==0)
			{
				maximo=numeroIngresado;
				minimo=numeroIngresado; 
			}
			else
			{
					if ( numeroIngresado > maximo)
					{
						maximo=numeroIngresado;
					}

					
					if (numeroIngresado < minimo)
					{
						minimo=numeroIngresado; 
					}
									
			}

		contador++;
		respuesta=prompt("ingrese si para continuar: ");
	}
	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;

}//FIN DE LA FUNCIÓN