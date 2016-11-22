function Mostrar()
{
//tomo la edad  

	var edad;
	edad=document.getElementById('edad').value;
	//edad=parseInt(edad);
	console.log (edad);
	if ( edad < 13 || edad >17 )
	{ // o se puede poner asi
		// if (!(( edad >=13 ) && (edad <=17 )))
		alert ( "Ud no es adolescente, su edad es: " + edad );
	}	

	// o se puede escribir asi de forma simplificada
	//if (edad > 17)
	//{
	//	if (edad < 13)
	//	{
	//		alert ("Ud no es adolescente");
	//	}

	//}



}//FIN DE LA FUNCIÓN


//