function Mostrar()
{
//Nivel 1 - Ejerc 1
	var lado;
	var superficie;

	parseInt(lado);
	lado=document.getElementById('lado').value;
	superficie=lado*lado;

	alert("La superficie del cuadrado es: " + superficie);

} // fin function Mostrar()

function Mostrar()
{
	//Nivel 1 - Ejerc 2
	var importe;
	
	var importeConDescuento;


	importe=parseInt(prompt("Ingrese el precio del producto: "));
	importeConDescuento=importe*0.75;

	alert("El importe con Descuento es: "+ importeConDescuento);

}

function Mostrar()
{
	//Nivel 1 - Ejerc 3

	var precio1;
	var precio2;
	var precio3;
	var suma;
	var promedio;


	precio1=parseInt(document.getElementById('precio1').value)
	precio2=parseInt(document.getElementById('precio2').value);
	precio3=parseInt(document.getElementById('precio3').value);

	suma=precio1+precio2+precio3;
	promedio=suma/3;

	alert("El total de la compra es: " + "y el promedio es: " + promedio);

}

function Mostrar()
{
	//Nivel 2 - Ejerc 1

	var numero1;
	var numero2;
	var suma;

	numero1=parseInt(prompt("Ingrese numero a: "));
	numero2=parseInt(prompt("Ingrese numero b: "));

	suma=numero1+numero2;

	if ( suma == 0 )
	{
		document.write("El resultado es igual a 0");
	}
	else
	{
			if ( suma > 0 )
			{
				document.write("el resultado es positivo");
			}
			else
			{
				document.write("el resultado es negativo");
			}
	}

	
}

function Mostrar()
{

	//Nivel 2 - Ejerc 5
	var mes;

	mes=prompt("Ingrese un MES: ");
	switch (mes)
	{
		"Diciembre":
			alert("se vienen las fiestas");
			break;
		"Enero":
			alert("comienza el año");
			break;
		default:
			alert("No es Enero ni Diciembre");
			break;
	}

}

function Mostrar()
{
	//Nivel 3 -- Ejer 6

	var contador;
	var kilos;
	var masPesado=0;
	var menosPesado=0;

	for (contador=0 ; contador< 50; contador ++)
	{
		kilos=prompt("ingresar el peso en kilos: ");
		while (kilos < 0)
		{
			kilos=prompt("Re-ingresar el peso en kilos: ");

		}

		if ( kilos > masPesado )
		{
			masPesado=kilos;
		}

		if ( kilos < menosPesado || contador == 0 )
		{
			menosPesado=kilos;
		}

	}
	alert("El mas pesado es" + masPesado + "y el menos pesado es "+ menosPesado);
}

function Mostrar()
{
	//nivel 3 -- Ejer 7

		var contador;
		var edad;
		var sexo;
		var edadMasBaja=0;
		var	sumaEdad=0;
		var cantVarones=0;
		var promedio;

		for (contador=0; contador <100; contador++)
		{

			edad=prompt("ingresar edad: ");
			while (edad < 0 || edad >100)
			{
				edad=prompt("Re ingresar edad: ");
			}

			sexo=prompt("Ingresar sexo (f o m): ");
			while (sexo !="m" && sexo != "f" )
			{
				sexo=prompt("re Ingresar sexo: ");
			}

			sumaEdad=sumaEdad+edad;
			if ( edad < edadMasBaja || contador ==0)
			{
				edadMasBaja=edad;
			}

			if( sexo == "m" && edad >= 20)
			{
				cantVarones++;
			}
		}
		
		promedio=sumaEdad/100;	
		alert("el promedio es: "+ promedio + "la edad mas baja es: " edadMasBaja + " la cantidad de varones mayores de 20 es: " + cantVarones);

}

function()
{
	var numero;
	var cantidadPar=0;
	var contador=0;
	var suma=0;
	var numeroMax=0;
	var numeroMin=0;
	var promedio;
	var respuesta="si";

	while ( respuesta == "si" )
	{
		numero=parseInt(prompt("ingrese un numero:  "));
		//valido que el numero sea positivo
		while ( numero <= 0)
		{
			numero=parseInt(prompt("ingrese un numero:  "));
		}
		// contador de numeros para promedio
		contador++;
		//sumo los numeros;
		suma=suma+numero;

		// acumulo cant de numeros pares
		if (numero % 2 == 0)
		{
			cantidadPar++;
		}

		//calculo maximo y minimo

		if ( numero > numeroMax)
		{
			numeroMax=numero;
		}
		if (numero < numeroMin || numeroMin == 0)
		{
			numeroMin=numero;
		}

		respuesta=prompt("Desea ingresar otro numero (si/no):");
	}
		//calculo el promedio de numeros ingresados

		promedio=suma/contador;


		document.write=("La cantidad de pares es: " + cantidadPar);
		document.write=("el promedio de numeros ingresados es: " + promedio);
		document.write=("la suma de los nros ingresados es: " + suma);
		document.write=("El numero max es: " + numeroMax + "y el min es :" + numeroMin);

}





/*
function Mostrar()
{

var numeroIngresado;
var par=0;
var contador;

numeroIngresado=prompt("Ingrese un numero: ");
numeroIngresado=parseInt(numeroIngresado);

for(contador=1;contador<=numeroIngresado;contador++)
{
	if (contador %2 == 0 )
	{
		document.write("<br>"+contador);
		par++;
	}
	
}
document.write("<br>La cantidad de pares es: " + par);




}//FIN DE LA FUNCIÓN
*/