function Mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;

/*	opcion larga
	if ( edad < 13)
	{
		alert ("es un niño");
	}
	if ( edad > 12 && edad <18 )
	{
		alert ("es adolescente");

	}
	if ( edad > 17)
	{
		alert ("es mayor de edad");
	}

//
 Esto es UN ERROR!!!
	if ( edad > 17)
	{
		alert ("es mayor de edad");
		}
	if ( edad < 13)
	{
		alert ("es un niño");
	}
	else
	{
		//adolescente
	}

//ejemplo correcto:
*/
	if ( edad>17)
	{
		alert ("es un mayor");
	}
	else
	{
		if (edad<13)
		{
			alert ("es un niño");
		}	
		else
		{
			alert ("es un adolescente");
		}
	} // fin if ( edad>17)




}//FIN DE LA FUNCIÓN
//un if sin llave ejecuta solo la primera linea que le sigue