/* 
Reglas antes de llamar al profe:
	Hay que usar el debugger previamente
	abrir el archivo correspondiente
	tener codigo escrito.
*/


function Mostrar()
{
	var contador=0;

	document.write ("<h1>Bienvenidos</h1>")
	while ( contador < 10 )
	{
		
		contador++;
		document.write("<br> El contador es: " + contador);

	}

	document.write("<p>terminó</p>");


}//FIN DE LA FUNCIÓN

/* <br> html que agrega un enter 
	<h1>Es un tag html header agrega un enter</h1>
	<p>El tag que define un parrafo </p>

iteración con while

La variable contador tiene que estar inicializada
(por el usuario o yo le asigno un valor )
cont=0;
while (cont < 10)  -- evaluo la variable ! ojo la cantidad de repeticiones se respeta
	cont++; -- la incremento o la modifico

*/