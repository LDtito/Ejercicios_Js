var letra
letra = prompt("Ingrese una letra");

    switch (letra) {
    case "a": case "A":
        document.write("La letra: ", letra, " es vocal");
        break;
    case "e": case "E":
        document.write("La letra: ", letra, " es vocal");
        break;
    case "i": case "I":
        document.write("La letra: ", letra, " es vocal");
        break;
    case "o": case "O":
        document.write("La letra: ", letra, " es vocal");
        break;
    case "u": case "U":
        document.write("La letra: ", letra, " es vocal");
        break;
                
    default:
        document.write("La letra: ", letra, " es consonante");
    }

