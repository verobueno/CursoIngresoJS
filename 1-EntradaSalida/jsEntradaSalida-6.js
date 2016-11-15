/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	
 	//id="numeroUno"
 	//id="numeroDos"
 	var numero1;
 	var numero2;
 	//var suma;
 
 	numero1=document.getElementById('numeroUno').value;
 	numero2=document.getElementById('numeroDos').value;
 
 	numero1=parseInt(numero1);
 	numero2=parseInt(numero2);
 

 	suma=numero1+numero2;
 	alert("La suma es: "+ suma);
 	//alert("La suma es: "+ (numero1+numero2));

 	//alert(&numero1);
}

// v 1.0
//var suma = parseInt(numero1)+parseInt(numeroDos);
//
//Declaracion de variables
//las variables no pueden empezar con signos raros, siempre
// las vamos a declarar con letras o guion bajo, tratar de no usar var del estilo
// "n1" en lugar de eso numero1.
// "var" la transforma en una variable global