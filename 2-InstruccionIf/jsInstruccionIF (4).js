function Mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if (( edad >=13 ) && (edad <=17 ))
	{
		alert ( "Ud es adolescente, su edad es: " + edad );
	}	

}//FIN DE LA FUNCIÓN


//
//	if (edad > 12)
//	{
//			if (edad < 18)
//			{
//				alert("jajaja");
//			}
//
//	}