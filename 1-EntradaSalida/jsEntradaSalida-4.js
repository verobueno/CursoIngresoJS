/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	//id="elNombre"
	var nombre=prompt("ingrese nombre");
	//en este ejemplo pusimos mal el valor de la variable prompt para ver como se
	// genera un código de err - lo levantamos en chrome con f12 console

	//nombre=document.getElementById('elNombre').value;

	document.getElementById('elNombre').value=nombre;
	
	//la página es read only, tome el dato por getElementById
}

