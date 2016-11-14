/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	//defino variables nombre y edad
	var nombre;
	var edad;

// id="elNombre"
// id="laEdad"

//var nombre=prompt("ingrese nombre");
//var edad=prompt("ingrese edad");

nombre=document.getElementById('elNombre').value;
edad=document.getElementById('laEdad').value;

//document.getElementById('elNombre').value=nombre;
//document.getElementById('laEdad').value=edad;

alert("Usted se llama: "+nombre+" y su edad es: "+edad);
}

//
//declaro las variables linea 6
//las cargo con getElementById nombre=document.getElementById('elNombre').value;
//variable del lado izq del = asigna del lado de la derecha lo muestra.
//donde elNombre es el valor que capturo del html, .value muestra el valor?
// o las cargo con prompt var nombre=prompt("ingrese nombre");
//las muestro con Alert
//o las muestro con document.getElementById('elNombre').value=nombre;