function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var NumeroIngresado;

	while ( respuesta == "si" )
	{

		contador++;
		numeroIngresado=prompt("Ingrese numero " + contador );
		numeroIngresado=parseInt(numeroIngresado); 

			if ( numeroIngresado > 0)
			{
				positivo=positivo+numeroIngresado; 
			}
			else
			{
				if( numeroIngresado != 0)
				{
					negativo=negativo*numeroIngresado; 
				}
				
			}
		

		respuesta=prompt("ingrese si para continuar: ");
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
/*
if(numeroIngresado<0)
{// entras cuando es negativo
	negativo=negativo*numeroIngresado;
}
else
{// entras cuando es positivo y cuando es 0 (no afecta a la suma)
	positivo+=numeroIngresado;
}
respuesta=prompt("ingrese si para continuar");







*/