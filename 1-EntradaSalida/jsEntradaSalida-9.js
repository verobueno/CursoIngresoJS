/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	//id="numeroDividendo
	//id="numeroDivisor"
	var importe;
	
	importe=document.getElementById('sueldo').value;
	importe=parseInt(importe);
	importe=importe*1.10

	document.getElementById('resultado').value=importe;
}
