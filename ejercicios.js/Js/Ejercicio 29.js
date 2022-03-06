    var i, j;
    var num = new Number();
    num = Number(prompt("Ingrese un numero"));
document.write("/////////////////////////////////////",'<BR/>');
    for (i=num;i>=1;i--) {
        for (j=1;j<=i;j++) {
            document.write(j);
        }
        document.write("",'<BR/>');
    }
document.write("/////////////////////////////////////",'<BR/>');