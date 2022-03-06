var num = new Number();
var a = new Number();
var b = new Number();
document.write("ingrese un numero",'<BR/>');
num = Number(prompt());
a = Math.trunc(num/100);
b = num%10;

document.write("/////////////////////////////////////",'<BR/>');
if (num<2) {
    document.write("Los palindromos son de dos cifras en adelante por favor ingrese un numero de dos cifras o mas",'<BR/>');
} else {
    if (a==b) {
        document.write("El numero: ",num," es Palindromo",'<BR/>');
    } else {
        document.write("El numero: ",num," no es Palindromo",'<BR/>');
    }
}
document.write("/////////////////////////////////////",'<BR/>');