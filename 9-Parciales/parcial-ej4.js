/*Ejercicios de parcial */


	function PuntoUno()
	{
		//calcular el perímetro de un cuadrado
		var perimetro;
		var BaseDelCuadrado=getElementById('base').value;

		parseInt(BaseDelCuadrado);
		perimetro=((BaseDelCuadrado*2)+(BaseDelCuadrado*2));
		alert("El perímetro del cuadrado es: "+ perimetro);
	}//funcion PuntoUno()



	function PuntoDos()
	{
		//calcular el importe con IVA
		var Importe;
		var ImporteFinal;

		Importe=prompt("Ingrese importe: ", 999 );
		ImporteFinal= Importe*1.21

		alert("El importe con IVA es: "+ ImporteFinal);


	}//funcion PuntoDos()







	function PuntoCuatro()
	{
		// realizar el algoritmo que pida dos numeros por promt
		//si son iguales los mutiplique, si el 1ro es mayor que el 2do los reste 
		// y sino que los sume, mostrar el resultado por document.write

		var numeroUno;
		var numeroDos;
		var resultado;

		numeroUno=parseInt(prompt("Ingrese un numero: "));
		numeroDos=parseInt(prompt("Ingrese otro numero: "));

		if ( numeroUno == numeroDos )
		{
			resultado=numeroUno*numeroDos;
		}
		else
		{
			if ( numeroUno > numeroDos )
			{
				resultado=numeroUno-numeroDos;
			}
			else
			{
				resultado=numeroUno+numeroDos;
			}
		}

		document.write("El resultado es: "+ resultado);

	}// Fin funcion PuntoCuatro()



	function PuntoCinco()
	{

	//realizar un algoritmo que pida un día de la semana por prompt
	// si es un "Sábado" o "Domingo" informar por alert
	//"es  fin de semana" de lo contrario informar por alert "a trabajar"

		var Dia;
			
		 Dia=prompt("ingrese un día de la semana: ");

		 switch (Dia)
		 {
		 	case "Sabado":
		 	case "Domingo":
		 		alert("Es fin de semana");
		 		break;
		 	default:
		 		alert("A Trabajar!!!");

		 } // cierro  switch ("Dia")

	}// Fin funcion PuntoCinco()

	function RecuperatorioTres()
	{
		//realizar el algoritmo que tome por ID tres datos: precio1, precio2 y precio3 de una compra y luego que
		//muestre la suma y el promedio de los precios

		var precio1;
		var precio2;
		var precio3;
		var suma;
		var promedio;

		precio1=parseInt(document.getElementById('precio1').value);
		precio2=parseInt(document.getElementById('precio2').value);
		precio3=parseInt(document.getElementById('precio3').value);

		suma=precio1+precio2+precio3;
		promedio=suma/3;

		alert("La suma de los numeros es: "+ suma);
		alert("El promedio es: "+ promedio);

	}


	function RecuperatorioCuatro()
	{

		//4- (IF) realizar el algoritmo que pida dos números por prompt, lo sume e informe si el resultado de la suma
		//“positivo”,” negativo” o “cero” por document.write.

		var numeroUno;
		var numeroDos;
		var suma;

		numeroUno=parseInt(prompt("Ingrese un numero: "));
		numeroDos=parseInt(prompt("Ingrese otro numero: "));

		suma=numeroUno+numeroDos;
		if ( suma == 0 )
		{
			document.write("El resultado de la suma es 0 ");

		} // cierro if ( suma == 0 )
		else
		{
			if ( suma > 0)
			{
				document.write("El resultado es positivo");
			} //if ( suma > 0)
			else
			{
				document.write("El resultado es negativo");
			}
		}
		


	}//funcion RecuperatorioCuatro()

	function RecuperatorioCinco()
	{
	//(SWITCH) realizar el algoritmo que pida un MES por prompt, si es “Diciembre” informar por alert “Se
	//vienen las fiestas” ,si es “Enero” informar por alert “comienza el año”, de lo contrario informar por alert
	//“no es enero, ni diciembre” .
		var Mes;


		Mes=prompt("Ingrese un Mes");

		switch(Mes)
		{
			case "Diciembre":
				alert("se vienen las fiestas");
				break;
			case "Enero":
				alert("comienza el año");
				break;
			default:
				alert("No es Enero ni Diciembre");
				break;

		}//	switch(Mes)





	}//funcion RecuperatorioCinco()




