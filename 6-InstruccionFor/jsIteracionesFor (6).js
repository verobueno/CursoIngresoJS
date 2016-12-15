
/*
function Mostrar()
{
	var indice;
	var numeroIngresado;
	var contador;
	var numeroPar=0;


	numeroIngresado=prompt("ingrese un numero: ")
	numeroIngresado=parseInt(numeroIngresado);
	for(indice=0;indice<numeroIngresado;indice++)
	{
		if(indice %2 == 0)
		{
			numeroPar++;
		}
	}
	document.write("la cantidad de numeros pares es: "+ numeroPar);


}//FIN DE LA FUNCIÓN

*/

function Mostrar()
{

	var nota;
	var sexo;
	var contador=0;
	var promedio;
	var notaBaja=0;
	var contVarones=0;
	var cantidad_de_alumnos=3;
	var sumatoria_de_notas=0;

	//var bandera_primera_vez=1;

//	for (contador=0; contador < 100 ;contador ++)
	for ( contador=0; contador < cantidad_de_alumnos ;contador ++)
	{
		//------ carga de nota, con su validacion -------
		nota=parseInt(prompt("Ingrese la nota: ") );
		while ( nota < 0 || nota > 10 ) 
		{
			nota=parseInt(prompt("Reingrese la nota: "));
		}

		//---- carga de sexo, con su validacion
		sexo=prompt("Ingrese sexo (f o m): ");
		// NO IGUAL != --- NO OLVIDAR
		while ( sexo != "f" && sexo != "m" )
		{// repite siempre que se cumpla
			//g ->    true   && true  = true  => repite
			//f ->    falso   && true  = false => sale

			// si hubieces puesto una OR
			//f ->    falso   || true  = true => repite

			sexo=prompt("Reingrese el sexo (f o m); ");
		}

			//Acumulo nota para despues calcular promedio
			sumatoria_de_notas=sumatoria_de_notas+nota;
			
					
			// tengo que obtener la nota mas baja
			//if (( nota < notaBaja) || (bandera_primera_vez==1))
			if (( nota < notaBaja) || (contador==0))
			{ // la 1ra vez que pasa por aca mi contador va a ser ==0...
				notaBaja=nota;
				//bandera_primera_vez=0;
			}
			
			if ((sexo == "m" ) && (nota >= 6 ))
			{
				contVarones++;
			}

	}//termino for (contador=0; contador < cantidad_de_alumnos ;contador ++)

		promedio=sumatoria_de_notas/cantidad_de_alumnos;

		alert("el promedio de las notas es: " + promedio);
		alert("la nota mas baja es: " + notaBaja);
		alert("La cantidad de varones con nota mayor o igual a 6 es: " + contVarones);


}

/*
while ( (sexo =! "f") && (sexo =! "m" ))
		{// repite siempre que se cumpla
			//g ->    true   && true  = true  => repite
			//f ->    falso   && true  = false => sale

			// si hubieces puesto una OR
			//f ->    falso   || true  = true => repite
			
			sexo=prompt("Reingrese el sexo (f o m); ");
		}
*/