/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

 //id="Cantidad"
 //id="Marca"
 //id="precioDescuento"


function CalcularPrecio () 
{
	var cantidad;
	var marca;
	var precio;
	var descuento;
	var preciocondescuento;
	var ingresosbrutos;

	cantidad=document.getElementById('Cantidad').value;
	marca=document.getElementById('Marca').value;
	precio=35;

		if ( cantidad > 5) 
		{
			descuento=50;
		} 	
		else
		{
			if (cantidad == 5) 
			{
				if ( marca == "ArgentinaLuz")
				{
					descuento=40;
				}
				else
				{
					descuento=30;
				}
			}//if (cantidad == 5) 

			if ( cantidad == 4 )
			{
				if ( marca == "ArgentinaLuz" || marca == "FelipeLamparas")
				{
					descuento=25;
				}
				else
				{
					descuento=20;
				}
			}//if ( cantidad == 4 )

			if ( cantidad == 3 )
			{
				if ( marca == "ArgentinaLuz" )
				{
					descuento=15;
				}
				else
				{
					if ( marca == "FelipeLamparas" )
					{
						descuento=10;
					}
					else
					{
						descuento=5;
					}//if ( marca == "FelipeLamparas" )
				}//if ( marca == "ArgentinaLuz" )
			}//if ( cantidad == 3 )

		}//if ( cantidad > 5) 

		precio=precio*cantidad;
		descuento=precio*descuento/100;
		preciocondescuento=(precio-descuento);


		if ( preciocondescuento > 120 )
		{
			ingresosbrutos=(preciocondescuento*10/100);
			preciocondescuento=preciocondescuento+ingresosbrutos;
			alert("Usted pago " + ingresosbrutos + " de IIBB");

		}
		document.getElementById('precioDescuento').value=preciocondescuento;
		//imprimo en pantalla el valor del precio final;
}



/*
			if ( (cantidad == 5) Luz"))&& (marca == "ArgentinaLuz"))
			{
				descuento=40;
			}
			else
			{
				if ((cantidad == 4) && ((marca == "ArgentinaLuz") || (marca == "FelipeLamparas")))
				{
					descuento=25;
				}
				else
				{
					if ((cantidad == 3 ) && ( marca == "ArgentinaLuz"))
					{
						descuento=15;
					}
					else
					{
						if ( cantidad == 5)

					}
				}//if ((cantidad == 4) && ((marca == "ArgentinaLuz") || (marca == "FelipeLamparas")))
			}//if ( (cantidad == 5) && (marca == "Argentina
*/