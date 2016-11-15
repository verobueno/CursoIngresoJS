/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	
	//id="numeroDividendo
	//id="numeroDivisor"
	var imp;
	
	imp=document.getElementById('importe').value;
	imp=parseInt(imp);
	imp=imp*0.75;

	document.getElementById('resultado').value=imp;


}
