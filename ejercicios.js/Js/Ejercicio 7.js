
    var tiempollamada, total;
    var clave = new Number();
    document.write("/////////////////////////////////////////",'<BR/>');
    document.write("(1) - 0.15$ - Estados Unidos ",'<BR/>');
    document.write("(2) - 0.14$ -Canada",'<BR/>');
    document.write("(3) - 0.25$ -España",'<BR/>');
    document.write("(4) - 0.05$ -Colombia",'<BR/>');
    document.write("(5) - 0.10$ -Venezuela",'<BR/>');
    document.write("(6) - 0.11$ -Mexico",'<BR/>');
    document.write("(7) - 0.12$ -Argentina",'<BR/>');
    document.write("(8) - 0.08$ -Panama",'<BR/>');
    document.write("/////////////////////////////////////////",'<BR/>');
    clave = Number(prompt("Escoja la clave hacia a donde llama:"));

    switch (clave) {
    case 1:
        tiempollamada = Number(prompt("¿Cuanto duro la llamada?"));
        total = 0.15*tiempollamada;
        document.write("Su total a pagar es de: ",total,"$",'<BR/>');
        break;
    case 2:
        tiempollamada = Number(prompt("¿Cuanto duro la llamada?"));
        total = 0.14*tiempollamada;
        document.write("Su total a pagar es de: ",total,"$",'<BR/>');
        break;
    case 3:
        tiempollamada = Number(prompt("¿Cuanto duro la llamada?"));
        total = 0.25*tiempollamada;
        document.write("Su total a pagar es de: ",total,"$",'<BR/>');
        break;
    case 4:
        tiempollamada = Number(prompt("¿Cuanto duro la llamada?"));
        total = 0.05*tiempollamada;
        document.write("Su total a pagar es de: ",total,"$",'<BR/>');
        break;
    case 5:
        tiempollamada = Number(prompt("¿Cuanto duro la llamada?"));
        total = 0.10*tiempollamada;
        document.write("Su total a pagar es de: ",total,"$",'<BR/>');
        break;
    case 6:
        tiempollamada = Number(prompt("¿Cuanto duro la llamada?"));
        total = 0.11*tiempollamada;
        document.write("Su total a pagar es de: ",total,"$",'<BR/>');
        break;
    case 7:
        tiempollamada = Number(prompt("¿Cuanto duro la llamada?"));
        total = 0.12*tiempollamada;
        document.write("Su total a pagar es de: ",total,"$",'<BR/>');
        break;
    case 8:
        tiempollamada = Number(prompt("¿Cuanto duro la llamada?"));
        total = 0.08*tiempollamada;
        document.write("Su total a pagar es de: ",total,"$",'<BR/>');
        break;
    default:
        document.write("Ingreso la clave incorrecta por favor repetir.",'<BR/>');
    }