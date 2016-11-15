/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
// id="Largo">
// id="Ancho">
// id="Radio">

var Largo;
var Ancho;
var TotaldeAlambre;
var Perimetro;

Largo=document.getElementById('Largo').value;
Ancho=document.getElementById('Ancho').value;

Perimetro=((parseInt(Largo)+parseInt(Ancho))*2);
TotaldeAlambre=Perimetro*3; //tres vueltas de alambre

alert("La cantidad de alambre necesaria es: " + TotaldeAlambre);

}
function Circulo () 
{
	

//2pi x radio

var Radio;
var TotaldeAlambre;


Radio=document.getElementById('Radio').value;

TotaldeAlambre=(2 * 3.14 * Radio)*3;
alert("El total de Alambre es: " + TotaldeAlambre);



}


function Materiales () 
{
	
// id="Largo">
// id="Ancho">
// id="Radio">



Largo=document.getElementById('Largo').value;
Ancho=document.getElementById('Ancho').value;



}