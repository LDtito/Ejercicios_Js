    var contador, i, j, num; 
    var acumulador = new String();
    document.write("/////////////////////////////////////",'<BR/>');
    num = prompt("Ingrese un numero");
    if (num>3) {
        contador = num;
        acumulador = "";
        for (i=1;i<=3;i++) {
            acumulador = " ";
            for (j=1;j<=contador;j++) {
                acumulador = acumulador+" * ";
            }
            contador = contador-1;
            document.write(acumulador,'<BR/>');
        }
        contador = contador+1;
        for (i=1;i<=2;i++) {
            acumulador = " ";
            contador = contador+1;
            for (j=1;j<=contador;j++) {
                acumulador = acumulador+" * ";
            }
            document.write(acumulador,'<BR/>');
        }
    } else {
        document.write("No se puede calcular con numeros menores a 3 por favor ingrese otro numero",'<BR/>');
    }
document.write("/////////////////////////////////////",'<BR/>');