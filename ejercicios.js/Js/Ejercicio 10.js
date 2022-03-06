function ejercicio11(){
    let inputFecha = document.getElementById('fecha')

    let respuestaDiv = document.getElementById('respuesta')

    let fecha //string
    let D,M,A,B //int

    //Leer fecha;
    inputFecha.addEventListener('keyup',(e)=>{ 
        if((e.path[0].value).match(/[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}/g)){ //Comprobamos con expresiones regulares si la entrada es correcta
            fecha = e.path[0].value
            respuesta()
        }else{
            respuestaDiv.innerHTML = `Ingrese la fecha con el siguiente formato DD/MM/AAAA` 
        }
    })


    function respuesta(){
        //D <- CONVERTIRANUMERO(SUBCADENA(fecha,0,2))
        D = parseInt(fecha.substr(0,2))
        //M <- CONVERTIRANUMERO(SUBCADENA(fecha,4,5))
        M = parseInt(fecha.substr(3,5))
        //A <- CONVERTIRANUMERO(SUBCADENA(fecha,7,10))
        A = parseInt(fecha.substr(6,10))

        //Escribir 'Día : ',D
        respuestaDiv.innerHTML = `Día: ${D} </br>`
        //Escribir 'Mes : ',M
        respuestaDiv.innerHTML += `Mes: ${M}</br>`
        //Escribir 'Año : ',A
        respuestaDiv.innerHTML += `Año: ${A} </br>`


        if((A >= 1528 && A <= 3000) &&  (M >= 1 && M <= 30) && (D >= 1 && D <= 31)){
            if( ((A % 4)==0 && (A % 100) != 0 || (A % 400)==0) ){
                //Escribir 'AÑO BISIESTO'
                respuestaDiv.innerHTML += `AÑO BISIESTO </br>`
                B = 0
            }else{
                //Escribir 'AÑO NO ES BISIESTO'
                respuestaDiv.innerHTML += `AÑO NO BISIESTO </br>`
                B = 1
            }

            if(B = 0){
                //Segun M Hacer
                if( M == 1 || M == 3 ||  M == 5 || M== 7 || M == 8 || M== 10 || M == 12){
                    if(D >= 1 && D <= 31){
                        respuestaDiv.innerHTML += `FECHA CORRECTA`
                    }else{
                        respuestaDiv.innerHTML += `FECHA NO CORRECTA`
                    }
                }else if( M == 2){
                    if(D >= 1 && D <= 29){
                        respuestaDiv.innerHTML += `FECHA CORRECTA`
                    }else{
                        respuestaDiv.innerHTML += `FECHA NO CORRECTA`
                    }
                }else if(M == 4 || M == 6 ||  M == 9 || M== 11){
                    if(D >= 1 && D <= 30){
                        respuestaDiv.innerHTML += `FECHA CORRECTA`
                    }else{
                        respuestaDiv.innerHTML += `FECHA NO CORRECTA`
                    }
                }
            }else{
                //Segun M Hacer
                if( M == 1 || M == 3 ||  M == 5 || M== 7 || M == 8 || M== 10 || M == 12){
                    if(D >= 1 && D <= 31){
                        respuestaDiv.innerHTML += `FECHA CORRECTA`
                    }else{
                        respuestaDiv.innerHTML += `FECHA NO CORRECTA`
                    }
                }else if( M == 2){
                    if(D >= 1 && D <= 28){
                        respuestaDiv.innerHTML += `FECHA CORRECTA`
                    }else{
                        respuestaDiv.innerHTML += `FECHA NO CORRECTA`
                    }
                }else if(M == 4 || M == 6 ||  M == 9 || M== 11){
                    if(D >= 1 && D <= 30){
                        respuestaDiv.innerHTML += `FECHA CORRECTA`
                    }else{
                        respuestaDiv.innerHTML += `FECHA NO CORRECTA`
                    }
                }
            }
        }else{
            //Escribir 'Error en la fecha'
            respuestaDiv.innerHTML += `ERROR EN LA FECHA`
        }
    }
    //FinAlgoritmo
}