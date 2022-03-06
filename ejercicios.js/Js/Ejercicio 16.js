        var num=0;
		var pares=0;
		var impares=0;
		var cant = parseFloat(prompt("Ingrese un numero"));
		 while (num<=cant) {
			 if (num%2==0) {

				 pares=pares+num
				 
			 } else {
				 impares=impares+num
			 }
			 num=num+1
		 }	
		document.write("/////////////////////////////////////",'<BR/>');
		document.write("La suma de los números pares es:"+ pares.toFixed(2),'<BR/>');
		document.write("La suma de los números impares es: "+ impares.toFixed(2),'<BR/>');
		document.write("/////////////////////////////////////",'<BR/>');