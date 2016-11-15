/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	

	//id="numeroUno"
	//id="numeroDos"
	var num1;
	var num2;
	//var suma;

	num1=document.getElementById('numeroUno').value;
	num2=document.getElementById('numeroDos').value;

	num1=parseInt(num1);
	num2=parseInt(num2);

	//suma=num1+num1
	// alert("La suma es: "+ (num1+num2));
	alert("La suma es: "+ (num1+num2)); 
	//otra opcion
	//defino la variable, parseo y sumo cada nro
	//var suma = parseInt(num1)+parseInt(num2);

 // otra opcion
 //alert( "la suma es: "  +( parseInt(document.getElementById('numeroUno').value) + parseInt(document.getElementById('numeroDos').value) ));
}

function restar()
{

	//id="numeroUno"
	//id="numeroDos"
	var num1;
	var num2;
	//var resta;

	num1=document.getElementById('numeroUno').value;
	num2=document.getElementById('numeroDos').value;

	//num1=parseInt(num1);
	//num2=parseInt(num2);

	//resta=num1-num2;

	alert("La resta es  "+(num1-num2));
	

}

function multiplicar()
{ 
	

	//id="numeroUno"
	//id="numeroDos"
	var num1;
	var num2;
	var multiplicar;

	num1=document.getElementById('numeroUno').value;
	num2=document.getElementById('numeroDos').value;

	//num1=parseInt(num1);
	//num2=parseInt(num2);

	multiplicar=num1*num2;

	alert("La multiplicacion es: "+multiplicar);

}

function dividir()
{

	//id="numeroUno"
	//id="numeroDos"
	var num1;
	var num2;
	var dividir;

	num1=document.getElementById('numeroUno').value;
	num2=document.getElementById('numeroDos').value;

	//num1=parseInt(num1);
	//num2=parseInt(num2);

	dividir=num1/num2;

	alert("La division es: "+dividir);
	
}

//parseInt solo sirve para la SUMA!!!!!!!!
// otra opción --
//alert( "la suma es: "+parseInt(document.getElementById('numeroUno').value)+parseInt(document.getElementById('numeroDos').value));