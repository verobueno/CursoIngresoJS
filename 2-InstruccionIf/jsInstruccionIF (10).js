function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nrorandom;
	nrorandom=Math.floor((Math.random() * 10) + 1);

	if ( nrorandom == 9 || nrorandom == 10 )
	{
		console.log(nrorandom);
		alert( "Excelente");
	}
	else
	{
		if ( nrorandom > 4 )
		{
			console.log(nrorandom);
			alert( "APROBO" );
		}
		else
		{
			console.log(nrorandom);
			alert("Vamos, la proxima se puede");
		}
	}
	

}//FIN DE LA FUNCIÓN