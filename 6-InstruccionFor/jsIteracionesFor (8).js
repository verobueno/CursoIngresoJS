function Mostrar()
{

	var dia;
	var ventas;
	var importeMaximo=0;
	var importeMinimo=0;


	for ( dia=0; dia < 24 ; dia++ )
	{
		ventas=parseInt(prompt("Ingrese el importe de las ventas: "));
		
		while ( ventas < 0 )
		{
			ventas=parseInt(prompt("Reingrese el importe de las ventas: "));

		}//termino while ( ventas > 0)

		if ( ventas > importeMaximo )
		{
			importeMaximo = ventas;

		}	
		
		if ( (ventas < importeMinimo )|| (dia ==0) )
		{
			importeMinimo=ventas;
		}
		
	}//termino for ( dia=0; dia < 24 ; dia++ )

	alert("El importe mayor de ventas es: "+ importeMaximo + "y el importe menor es: "+ importeMinimo);


}//FIN DE LA FUNCIÓN