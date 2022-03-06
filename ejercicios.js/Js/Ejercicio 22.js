    var a, b, n, r;
    n = prompt("Ingrese el numero");
    r = 0;
    a = 0;
    b = 1;
    document.write("/////////////////////////////////////",'<BR/>')
    while (r<=n) {
        document.write("",r,'<BR/>');
        r = a+b;
        b = a;
        a = r;
    }
    document.write('<BR/>',"/////////////////////////////////////");