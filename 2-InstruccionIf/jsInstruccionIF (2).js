function Mostrar()
{
//tomo la edad  


var edad;
edad=document.getElementById('edad').value;
edad=parseInt(edad);

if ( edad > 17 )
{
	alert ( "Ud es mayor de edad, su edad es: " + edad );
}	
else
{
	alert( "ud no es mayor de edad" );
}

}//FIN DE LA FUNCIÓN

// El igual = asigna
// la igualacion se realiza con ==
// ojo con perder llaves!