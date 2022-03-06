
var area, perimetro, pi, radio;
	radio = Number(prompt("Ingrese el radio del circulo"));
	area = (Math.PI*(radio*radio));
	perimetro = (2*Math.PI*radio);
	document.write("////////////////////////////////////////////////",'<BR/>');
	document.write(" El Area del Circulo es de: ",area,'<BR/>');
	document.write(" El Perimetro del Circulo es de: ",perimetro,'<BR/>');
	document.write("////////////////////////////////////////////////",'<BR/>');