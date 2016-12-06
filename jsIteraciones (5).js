function Mostrar()
{

	var sexo = prompt("ingrese f ó m");

	while ( sexo != "f" && sexo != "m" )
	{
		sexo=prompt("Incorrecto, por favor ingrese f ó m .");

	}
	alert ("Correcto el valor es: " + sexo);
	//document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN