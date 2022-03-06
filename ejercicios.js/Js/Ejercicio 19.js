	var num1, num2, num3, primer, segund, tercer; 
	num1 = prompt(" Ingrese un número: ");
	num2 = prompt(" Ingrese un número: ");
	num3 = prompt(" Ingrese un número: ");
	if ((num1>num2) && (num1>num3)) {
		primer = num1;
		if (num2>num3) {
			segund = num2;
			tercer = num3;
		} else {
			segund = num3;
			tercer = num2;
		}
	} else {
		if (num2>num3) {
			primer = num2;
			if (num1>num3) {
				segund = num1;
				tercer = num3;
			} else {
				segund = num3;
				tercer = num1;
			}
		} else {
			primer = num3;
			if (num1>num2) {
				segund = num1;
				tercer = num2;
			} else {
				segund = num2;
				tercer = num1;
			}
		}
	}
	document.write("/////////////////////////////////////",'<BR/>');
	document.write("Descendente: ",primer," - ",segund," - ",tercer,'<BR/>');
	document.write("Ascendente: ",tercer," - ",segund," - ",primer,'<BR/>');
	document.write("/////////////////////////////////////",'<BR/>');
