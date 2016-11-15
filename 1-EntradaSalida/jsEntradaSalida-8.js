/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

	//id="numeroDividendo
	//id="numeroDivisor"
	var dividendo;
	var divisor;
	

	dividendo=document.getElementById('numeroDividendo').value;
	divisor=document.getElementById('numeroDivisor').value;

	dividendo=parseInt(dividendo);
	divisor=parseInt(divisor);

	alert("El resto es  "+(dividendo%divisor));
	
}
//funcion modulo, veo si un nro es divisible por otro
// parseInt no es necesario