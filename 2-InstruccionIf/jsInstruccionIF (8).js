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

	if ( (edad > 17) && (estadoCivil == "Soltero"))
	{

		alert("Es soltero y no es menor");
	}
	


}//FIN DE LA FUNCIÓN