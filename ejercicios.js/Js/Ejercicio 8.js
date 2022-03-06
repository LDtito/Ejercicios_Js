	var nota = new Number();
	var nombre = new String();
	nombre = prompt("Ingrese el nombre del estudiante");
	nota = Number(prompt("Ingrese la nota del estudiante"));
		document.write("//////////////////////////////////",'<BR/>');
		if (nota>=0 && nota<=2) {
		document.write("El estudiante ",nombre," necesita Reforzamiento",'<BR/>');
		} else {
	    if (nota>=3 && nota<=4) {
		document.write("El estudiante ",nombre," esta Desaprobado",'<BR/>');
		} else {
		if (nota>=5 && nota<=7) {
		document.write("El estudiante ",nombre," esta aprobado",'<BR/>');
		} else {
		if (nota>=8 && nota<=9) {
		document.write("El estudiante ",nombre," tiene un promedio EXCELENTE",'<BR/>');
		} else {
		if (nota==10) {
		document.write("El estudiante ",nombre," esta BECADO",'<BR/>');
		} else {
		document.write("Nota no valida volver a ingresar",'<BR/>');
}}}}}
document.write("//////////////////////////////////",'<BR/>');
			