/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	/*
	concepto de variable
	contatenacion
	prompt
	*/

	var producto;
	producto="samsung";
	// prompt es ingreso, tomo datos y los proceso
	//funcion prompt ("parametro", "parametro")
	producto=prompt("ingrese marca ","sin marca");
	var precio=prompt("ingrese precio: ", "999");


//alert,salida, en este caso muestra el valor de la variable
// podes mostrar texto literal entre comillas
// para concatenar uso el signo +, en este ej un valor literal ""+ var
// los espacios que quiero que se vean van dentro de las comillas (muestran valor literal)
// puedo concatenar espacios entre comillas "" + "" etc
	alert("su producto es: "+producto+" y su precio es: "+precio);
}

