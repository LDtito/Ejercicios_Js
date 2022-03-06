var minimo, maximo, numero, suma; 
minimo = 0;
maximo = 0;
numero = 0;
suma = 0;
numero = parseInt(prompt("Escribe un numero"));
if(numero%2 == 0){
	minimo = (numero + 1)/2;
 }else{
	minimo = numero/2; 
 }

 maximo = minimo + (numero - 1); 
 
 while(minimo <= maximo){
	suma += minimo;
	minimo++;
 }
 suma = suma*2;

 document.write("La suma de n numeros es:", + suma);