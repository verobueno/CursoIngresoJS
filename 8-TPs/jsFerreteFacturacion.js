/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
// id="PrecioUno"
// id="PrecioDos"
// id="PrecioTres"

	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var suma;

	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioTres=document.getElementById('PrecioTres').value;

	suma=parseInt(PrecioUno)+parseInt(PrecioDos)+parseInt(PrecioTres);
	//Alert("La suma es: "+suma);
	alert("El precio total es: " + suma);
	


}
function Promedio () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var promedio;

	PrecioUno=document.getElementById('PrecioUno').value;
	PrecioDos=document.getElementById('PrecioDos').value;
	PrecioTres=document.getElementById('PrecioTres').value;

	promedio=(parseInt(PrecioUno)+parseInt(PrecioDos)+parseInt(PrecioTres))/3
	alert(promedio)
}

function PrecioFinal () 
{
	var PrecioUnoconIva;
	var PrecioDosconIva;
	var PrecioTresconIva;

	PrecioUnoconIva=(document.getElementById('PrecioUno').value)*1.21;
	PrecioDosconIva=(document.getElementById('PrecioDos').value)*1.21;
	PrecioTresconIva=(document.getElementById('PrecioTres').value)*1.21;

//	alert("El precio de cada producto con IVA es: " + PrecioUnoconIva+ ","+ PrecioDosconIva + ","+PrecioTresconIva);


alert ("Precio de los productos: \n "   + PrecioUnoconIva  + "\n"
									    + PrecioDosconIva  + "\n"
										+ PrecioTresconIva 		);
	
}

//console.log("hola") me muestra el valor de la variable
//si me paro sobre un texto CRTL D ... Y Selecciona todos los textos que estan en el programa.