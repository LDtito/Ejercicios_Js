var altura, area, base, perimetro;
	base = Number(prompt ("Cual es la base del rectangulo"));
	altura = Number(prompt("Cual es la altura del rectangulo"));
	area = (base*altura);
	perimetro = (2*base)+(2*altura);

	document.write("/////////////////////////////////////////",'<BR/>');
	document.write(" El Area del Rectangulo es de: ",area,'<BR/>');
	document.write(" El Perimetro del Rectangulo es de: ",perimetro,'<BR/>');
	document.write("/////////////////////////////////////////",'<BR/>');