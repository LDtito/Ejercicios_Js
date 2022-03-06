var salary = parseFloat(prompt("Salario"));
var category = prompt("Categoria","A, B, C, D");
var bo;

switch (category) {
    case "A":
        var bo = salary*(1.10); 
        // document.write("SALARIO TOTAL"+ salary*(1.10));
        
        break;
    case "B" :
        var bo= salary*(1.20); 
        // document.write("SALARIO TOTAL"+ salary*(1.20));
        break;
    case "C":
        var bo= salary*(1.30);
        // document.write("SALARIO TOTAL"+ salary*(1.30));
        break;
    case "D":
        var bo= salary*(1.50);
        // document.write("SALARIO TOTAL"+ salary*(1.50));
            break;
    default:
        break;
}
document.write("////////////////////////////////",'<BR/>');
document.write("SALARIO TOTAL $"+ bo.toFixed(2));
document.write('<BR/>',"////////////////////////////////");
