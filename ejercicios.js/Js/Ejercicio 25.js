var num1 = new Number();
var num2 = new Number();
var num3 = new Number();
num1 = Number(prompt("Ingrese un numero"));
num2 = Number(prompt("Ingrese un numero"));
num3 = Number(prompt("Ingrese un numero"));
document.write("/////////////////////////////////////",'<BR/>')
if (num1!=num2 && num1!=num3 && num2!=num3) {
    if ((num1>num2 && num1<num3) || (num1<num2 && num1>num3)) {
        document.write("El numero intermedio  es: ",num1,'<BR/>');
    } else {
        if ((num2>num1 && num2<num3) || (num2<num1 && num2>num3)) {
            document.write("El numero intermedio  es: ",num2,'<BR/>');
        } else {
            if ((num2>num1 && num3<num2) || (num3<num1 && num3>num2)) {
                document.write("El numero intermedio es: ",num3,'<BR/>');
            }
        }
    }
document.write("/////////////////////////////////////",'<BR/>')
} else {
    document.write("/////////////////////////////////////",'<BR/>')
    document.write("Los numeros deben ser diferentes",'<BR/>');
    document.write("/////////////////////////////////////",'<BR/>')
}
