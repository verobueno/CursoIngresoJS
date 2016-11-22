/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	//alert(numeroSecreto );

	numeroSecreto=Math.floor((Math.random() * 100) + 1);
	//alert("el numero secreto es: " + nro secreto);
	console.log("nro secreto: " + numeroSecreto);
	contadorIntentos=0;
	//contadorIntentos+=1;
	//contadorIntentos++;

}

function verificar()
{
var numero;
	numero=document.getElementById('numero').value;

	contadorIntentos=contadorIntentos+1;
	console.log(contadorIntentos);
	document.getElementById('intentos').value=contadorIntentos;

	if ( numeroSecreto == numero )
	{
		switch (contadorIntentos)
		{
			case 1:
				contadorIntentos = 1;
				alert("Ud es un Psiquico");
				break;
			case 2:
				contadorIntentos = 2;
				alert("excelente percepción");
				break;
			case 3:
				contadorIntentos = 3;
				alert("Esto es suerte");
				break;
			case 4:
				contadorIntentos = 4;
				alert("Excelente técnica");
				break;
			case 5:
				contadorIntentos = 5;
				alert("usted está en la media");
				break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				alert("falta técnica");
				break;
			default:
				alert("afortunado en el amor");
		}//termino switch(contadorIntentos)
	}// parte positiva
	else 
	{
		if (numero > numeroSecreto)
		{
			alert ("te pasaste");

		}
		else
		{
			alert("te falto");
		}
	}//termino if ( numeroSecreto == numero )
}