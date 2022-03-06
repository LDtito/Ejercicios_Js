
	var alumnosa, alumnosd;
	var apro = new Number();
	var desa = new Number();
		apro = Number(prompt("Cantidad de alumnos aprobados"));
		desa = Number(prompt("Cantidad de alumnos desaprobados"));
			alumnosa = (apro*100)/(apro+desa);
			alumnosd = (desa*100)/(apro+desa);

				document.write("//////////////////////////////////////////",'<BR/>');
				document.write("Porcentaje de alumnos aprobados: ",alumnosa,"%",'<BR/>');
				document.write("Porcentaje de alumnos desaprobados: ",alumnosd,"%",'<BR/>');
				document.write("//////////////////////////////////////////",'<BR/>');

			