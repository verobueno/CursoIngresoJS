/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	//id="sueldo"
	//id="resultado"
	var importe;
	
	importe=document.getElementById('sueldo').value;
	importe=parseInt(importe);
	importe=importe*1.10

	document.getElementById('resultado').value=importe;

	// v.2

	//importe=parseInt(document.getElementById('sueldo').value);
	//importe=importe+(importe*400 /100); o
	//importe=importe*5;


	//document.getElementById('resultado').value=importe;

/*
400%
x= x * 400/100 + x

x=  x * 4 + 1x
x =  4x + 1x
x=5x
--------------
aprender a calcular el 400%

*/

}

