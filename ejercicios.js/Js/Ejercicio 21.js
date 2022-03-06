// var t = parseInt(prompt("PONGA EL NUMERO......."));
// function esPalindromo (cadena){
//     t=cadena.length;
//     if(t==0){
//         return false;
//     }
//     for(i=0; i<t/2; i++){
//         if(cadena[i]!=cadena[t-1-i]){
//          return "ES PALINDROMO";
//         }
//     }
//     return "NO ES PALINDROMO";
// }
// document.write(esPalindromo('anitalavalatina'));

// let num = parseInt(prompt("PONGA EL NUMERO......."));
// let aux;
// let num_inv;
// aux= num;
// num_inv=0
// while (aux<0) {
//     num_inv=num_inv+aux%10
//     num_inv=num_inv*10
//     aux= parseInt(aux/10) 
// }
// num_inv=num_inv/10;
// if (num=num_inv) {
//     document.write("ES PALINDROMO");
    
// } else {
//     document.write("NO ES PALINDROMO")
    
// }

// function comprobar(){
//     izq=0;
//     der=document.form1.campo1.value.length-1;
//     cad=document.form1.campo1.value;
//     while (izq<der && cad[izq]==cad[der]){
//     izq++;
//     der--;
//     }
//     document.form1.campo2.value=(izq>=der);
//     }
let num = parseInt(prompt("Escribe un numero de 4 a 5 digitos"));
var originalNum=num;
var reverse=0;
while(num !=0){
    reverse=(reverse*10)+(num%10);
    num= parseInt(num/10);
}
document.write("/////////////////////////////////////",'<BR/>')
if(originalNum==reverse){
    document.write(originalNum+" Es palindromo");
}else{
    document.write(originalNum+' No es palindromo')
}
document.write('<BR/>',"/////////////////////////////////////");
