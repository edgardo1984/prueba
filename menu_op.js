var dato1, dato2, resultado, op;
op = prompt("Seleccione un opcion: 1 suma - 2 resta - 3 multiplicacion - 4 divicion", "");
op = parseInt(op);
switch(op){
	case 1:
		alert("Selecciono Suma . . . !!! ");
		dato1 = prompt("Valor dato uno: ", "");
		dato1 = parseInt(dato1);
		dato2 = prompt("Valor dato dos: ", "");
		dato2 = parseInt(dato2);
		resultado = dato1 + dato2;
		alert("Suma es :" +resultado);
		break;
	case 2:
		alert("Selecciono Resta . . . !!! ");
		dato1 = prompt("Introduzca un valor1: ", "");
		dato1 = parseInt(dato1);
		dato2 = prompt("Introduzca un valor2: ", "");
		dato2 = parseInt(dato2);
		resultado = dato1-dato2;
		alert ("La Resta es de : " + resultado);
		break;
	case 3:
		alert("Selecciono Multiplicacion . . . !!! ");
		dato1 = prompt("Introduzca un valor1: ", "");
		dato1 = parseInt(dato1);
		dato2 = prompt("Introduzca un valor2: ", "");
		dato2 = parseInt(dato2);
		resultado = dato1*dato2;
		alert ("La Multipliacion es de : " + resultado);
		break;
	case 4:
		alert("Selecciono Divicion . . . !!! ");
		dato1 = prompt("Introduzca un valor1: ", "");
		dato1 = parseInt(dato1);
		dato2 = prompt("Introduzca un valor2: ", "");
		dato2 = parseInt(dato2);
		resultado = dato1/dato2;
		alert ("La Divicion es de : " + resultado);
		break;
	default:
		Alert ("Opcion invalida .... !!!! ");	
}
