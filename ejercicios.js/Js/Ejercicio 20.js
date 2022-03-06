var a;
var n = parseInt(prompt("Ingrese un numero de 3 cifras: "));
a=parseInt(n/100)
var b;
b=n%10
document.write("/////////////////////////////////////",'<BR/>')
if (a==b) {
    document.write("El numero "+ n + " es palindromo" );
} else {
    document.write ("El numero no ", n, " es palindromo");
}
document.write('<BR/>',"/////////////////////////////////////");
