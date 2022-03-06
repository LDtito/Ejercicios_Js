var HorasTrabajadas, ValorHora, sueldo

nombre = prompt("Escriba el nombre del trabajador");
HorasTrabajadas = parseFloat(prompt("Horas trabajadas en el mes"));
ValorHora = parseFloat(prompt("¿Cuanto gana por hora?"));

sueldo = HorasTrabajadas * ValorHora;

document.write("El trabajador debe recibir un sueldo de: ", + sueldo)