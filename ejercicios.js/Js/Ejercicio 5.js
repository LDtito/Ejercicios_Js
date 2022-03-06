    var nombre, nota1, nota2, nota3, promedio;
    nombre = prompt("Nombre del Estudiante");
    nota1 = Number(prompt("Ingrese la Nota 1"));
    nota2 = Number(prompt("Ingrese la Nota 2"));
    nota3 = Number(prompt("Ingrese la Nota 3"));
    promedio = ((nota1+nota2+nota3)/3);

    
    document.write("/////////////////////////////////////////",'<BR/>');
    if (promedio>=6.95) {
        document.write("Su nota promedio es: ",promedio,'<BR/>');
        document.write("El estudiante ",nombre," APROBO",'<BR/>');
    } else {
        document.write("Su nota promedio es: ",promedio,'<BR/>');
        document.write("El estudiante ",nombre," REPROBO",'<BR/>');
    }
    document.write("/////////////////////////////////////////",'<BR/>');

