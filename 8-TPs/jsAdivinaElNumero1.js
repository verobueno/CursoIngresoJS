/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
// variables Globales
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );

	numeroSecreto=Math.floor((Math.random() * 100) + 1);
	//alert("el numero secreto es: " + nro secreto);

	contadorIntentos=0;
	//contadorIntentos+=1;
	//contadorIntentos++;
}

function verificar()
{

	var numero;
	numero=document.getElementById('numero').value;

	
	
	contadorIntentos=contadorIntentos+1;
	
	if ( numeroSecreto == numero )
	{
		
		alert("Usted es un ganador!!!");
	}
	else
	{
			
		//document.getElementById('contadorIntentos').value=contadorIntentos;
		if ( numero < numeroSecreto)
		{
			
			alert("falta para llegar al numero secreto");

		}
		else
		{
			alert ("se paso del número secreto");
		} // termino if ( numero < numeroSecreto)
	}//termino if (numeroSecreto == numero)
	
}
//la interfaz de usuario separada de la lógica
