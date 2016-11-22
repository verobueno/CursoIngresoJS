/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	
	eleccionMaquina=Math.floor((Math.random() * 3) + 1);
	console.log("piedra 1, papel 2, tijera 3 " + "maquina eligio: " + eleccionMaquina);

}//FIN DE LA FUNCIÓN
function piedra()
{//piedra 1
		switch(eleccionMaquina)
		{
			case 1:
				//empate
				alert("Empate");
				break;
			case 2:
				//gana eleccionMaquina
				alert("gano la Maquina");
				break;
			case 3:
				//gana jugador
				alert("gano el jugador");
				break;
		}


}//FIN DE LA FUNCIÓN
function papel()
{//papel 2

		switch(eleccionMaquina)
		{
			case 1:
				//empate
				alert("gana jugador");
				break;
			case 2:
				//gana eleccionMaquina
				alert("empate");
				break;
			case 3:
				//gana jugador
				alert("gano la maquina");
				break;
		}



}//FIN DE LA FUNCIÓN
function tijera()
{//tijera 3
	
	if( eleccionMaquina == 3)
	{
		alert("empate");
	}
	else
	{
		if( eleccionMaquina == 2 )
		{
			alert ("gana jugador");
		}
		else
		{
			alert ("gana maquina");
		}
	}

	
}//FIN DE LA FUNCIÓN