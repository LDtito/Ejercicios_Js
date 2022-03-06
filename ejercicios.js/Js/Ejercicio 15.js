// var n;
//num=prompt("CUANTOS NUMEROS ------------")
//num=parseInt(num);
//var pares;
//var impares;

//for (let i = 1; i <= num; i++) {
   // document.write(i+"<br>");   
//}
//if (num%2==0) {
  // pares=pares+1
    
//} else {
//impares=impares+1    
//}
//document.write("Pares=" + pares);
//document.write("Impares:", impares)//
let cantpares = 0;
let cantimpares = 0;
let x = 0;
let valor;
while (x < 10) {
    valor = parseInt(prompt('Ingrese un numero'));
    if (valor % 2 == 0) {
        cantpares = cantpares + 1;
    } else {
        cantimpares = cantimpares + 1;
    }
    x = x + 1;
}
document.write("////////////////////////////////",'<BR/>');
document.write('Cantidad de valores pares ingresados:' + cantpares);
document.write('<br>');
document.write('Cantidad de valores impares ingresados:' + cantimpares);
document.write('<BR/>',"////////////////////////////////");