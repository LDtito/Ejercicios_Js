var Nproducto, Cunitario, Unidades

Nproducto = parseFloat(prompt("Escribe el nombre del producto"));
Cunitario = parseFloat(prompt("Escribe el valor unitario"));
Unidades = parseFloat(prompt("Escribe cuantas unidades se compro"));

subtotal = Cunitario * Unidades
document.write("El subtotal es de: ", + subtotal);
document.write('<br>');
Descuento = subtotal * 0.1
document.write("El Descuento es de: ", + Descuento);
document.write('<br>');
Total = subtotal - Descuento
document.write("El total de su factura es de: ", + Total);