function Mostrar()
{
//tomo la edad  

	//< id="edad">
	//< id="estadoCivil">
	var edad;
	var estadoCivil;

	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;
	// info("valor de la variable estadoCivil", estadoCivil);

	if ( (edad < 18) && (estadoCivil != "Soltero"))
	{

		alert ( "es muy pequeño para NO ser soltero");
	}
	else
	{
		console.log ("es mayor de 18 o menor y soltero");
	}



}//FIN DE LA FUNCIÓN