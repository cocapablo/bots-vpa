function enviarWhatsApp(nombre="Nombre Default", totalVentas=1000, totalCompras=1000, totalIIBB=1000, totalSueldosyCargasSociales=1000, totalOtrosGastos=1000, resultadoAlMomento=1000, gananciaOPerdida=1000, deducciones=1000, totalAPagar=1000) {
    let botId = '172592529265043';
    let telDamian = "541134821708";
    let telCoca = "541157687279";
    let phoneNbr = telDamian;
    let bearerToken = 'EAAUOk6srG94BO3UuppvACTFQgS6VAwrc4MC9qRmgFiZBcnLdjh6mU9g1uMFwY1hzFFGioETIHmr8oCZAVqukWwoy5ZB8YYXqpJ8mOukA2FU0eFMc02J65GWSaAZCHBUjhxoFntwve5cHgJOwCUbiDZBlkgNUXIpzBHdhBAGpqWf4kZC6cBABepZAigC93ONAGA2z4yJPIp4wkIlAJht';

    let url = 'https://graph.facebook.com/v15.0/' + botId + '/messages';
    let data = {
    messaging_product: 'whatsapp',
    to: phoneNbr,
    type: 'template',
    template: {
        name:'mensaje_bot3',
        language:{ code: 'es_AR' },
        "components": [
            {
            "type": "body",
            "parameters": [
                {
                "type": "text",
                "text": nombre
                },
                {
                "type": "currency",
                "currency": {
                    "fallback_value": "1",
                    "code": "ARS",
                    "amount_1000": "" + (totalVentas * 1000)
                }
                },
                {
                    "type": "currency",
                    "currency": {
                    "fallback_value": "1",
                    "code": "ARS",
                    "amount_1000": "" + (totalCompras * 1000)
                    }
                },
                {
                    "type": "currency",
                    "currency": {
                    "fallback_value": "1",
                    "code": "ARS",
                    "amount_1000": "" + (totalIIBB * 1000)
                    }
                },
                {
                    "type": "currency",
                    "currency": {
                    "fallback_value": "1",
                    "code": "ARS",
                    "amount_1000": "" + (totalSueldosyCargasSociales * 1000)
                    }
                },
                {
                    "type": "currency",
                    "currency": {
                    "fallback_value": "1",
                    "code": "ARS",
                    "amount_1000": "" + (totalOtrosGastos * 1000)
                    }
                },
                {
                    "type": "currency",
                    "currency": {
                    "fallback_value": "1",
                    "code": "ARS",
                    "amount_1000": "" + (resultadoAlMomento * 1000)
                    }
                },
                {
                    "type": "currency",
                    "currency": {
                    "fallback_value": "1",
                    "code": "ARS",
                    "amount_1000": "" + (gananciaOPerdida * 1000)
                    }
                },
                {
                    "type": "currency",
                    "currency": {
                    "fallback_value": "1",
                    "code": "ARS",
                    "amount_1000": "" + (deducciones * 1000)
                    }
                },
                {
                    "type": "currency",
                    "currency": {
                    "fallback_value": "1",
                    "code": "ARS",
                    "amount_1000": "" + (totalAPagar * 1000)
                    }
                }
            ]
            }
        ]
    },
    
        
    };


    let postReq = {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer ' + bearerToken,
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    json: true
    };

    fetch(url, postReq)
    .then(data => {
        return data.json()
    })
    .then(res => {
        console.log("Respuesta :", res);
        res.error ? 
        Swal.fire({
            icon: "warning",
            title: "ERROR al enviar el mensaje",
            text: `Se produjo el siguiente error: ${res.error.message}`
        })
        : 
        Swal.fire({
            icon: "success",
            title: "Operación exitosa",
            text: `El mensaje para ${nombre} fué enviado con éxito`
        });
        
    })
    .catch(error => {
        console.log(error);
        Swal.fire({
            icon: "warning",
            title: "ERROR al enviar el mensaje",
            text: `Se produjo el siguiente error: ${error.toString()}`
        });
           
    })
}


    function obtenerDatosDelFormulario() {
        let datos = {};
        let nombre = "";
        let totalVentas = 0;
        let totalCompras = 0;
        let totalIIBB = 0;
        let totalSueldosyCargasSociales = 0;
        let totalOtrosGastos = 0;
        let resultadoAlMomento = 0;
        let gananciaOPerdida = 0;
        let deducciones = 0;
        let totalAPagar = 0;
        let elemento;
        const claseTodoBien = "form-control text-success text-emphasis";
        const claseTodoMal = "form-control text-danger text-emphasis";
        const claseTodoNormal = "form-control text-primary text-emphasis";

        //Nombre
        elemento = document.getElementById("idNombre");
        nombre = elemento.value;

        //Total Ventas
        elemento = document.getElementById("idTotalVentas");
        parseFloat(elemento.value) && (totalVentas = parseFloat(elemento.value));
        

        //Total Compras
        elemento = document.getElementById("idTotalCompras");
        parseFloat(elemento.value) && (totalCompras = parseFloat(elemento.value));

        //Total IIBB
        elemento = document.getElementById("idTotalIIBB");
        parseFloat(elemento.value) && (totalIIBB = parseFloat(elemento.value));

        //Total Sueldos y Cargas Sociales
        elemento = document.getElementById("idTotalSueldosyCargasSociales");
        parseFloat(elemento.value) && (totalSueldosyCargasSociales = parseFloat(elemento.value));

        //Total Otros Gastos
        elemento = document.getElementById("idTotalOtrosGastos");
        parseFloat(elemento.value) && (totalOtrosGastos = parseFloat(elemento.value));

        //Resultado al Momento (Resultado Bruto)
        elemento = document.getElementById("idResultadoAlMomento");
        //parseFloat(elemento.value) && (resultadoAlMomento = parseFloat(elemento.value));
        resultadoAlMomento = obtenerResultadoBruto();
        elemento.value = resultadoAlMomento;
        elemento.className = (resultadoAlMomento >= 0) ? claseTodoBien : claseTodoMal;
        console.log("Clase Resultado bruto: " + elemento.className);

        //Ganancia o Pérdida
        elemento = document.getElementById("idGananciaOPerdida");
        parseFloat(elemento.value) && (gananciaOPerdida = parseFloat(elemento.value));

        //Deducciones
        elemento = document.getElementById("idDeducciones");
        parseFloat(elemento.value) && (deducciones = parseFloat(elemento.value));

        //Total a Pagar
        elemento = document.getElementById("idTotalAPagar");
        //parseFloat(elemento.value) && (totalAPagar = parseFloat(elemento.value));
        totalAPagar = obtenerTotalAPagar();
        elemento.value = totalAPagar;
        elemento.className = (totalAPagar >= 0) ? claseTodoNormal : claseTodoBien;
        console.log("Clase Resultado bruto: " + elemento.className);


        //Construyo el objeto datos
        datos = {
            nombre,
            totalVentas,
            totalCompras,
            totalIIBB,
            totalSueldosyCargasSociales,
            totalOtrosGastos,
            resultadoAlMomento,
            gananciaOPerdida,
            deducciones,
            totalAPagar
        }

        console.log(datos);
        
        return datos;

    }

    function enviar(evento) {
        let datos;

        //Cancelo el submit
        evento.preventDefault();

        //Valido y obtengo los datos del formulario
        datos = obtenerDatosDelFormulario();

        //desestructuo los datos en variables
        const {nombre,
            totalVentas,
            totalCompras,
            totalIIBB,
            totalSueldosyCargasSociales,
            totalOtrosGastos,
            resultadoAlMomento,
            gananciaOPerdida,
            deducciones,
            totalAPagar} = datos;

        //Envío el WhatsApp
        enviarWhatsApp(nombre,
            totalVentas,
            totalCompras,
            totalIIBB,
            totalSueldosyCargasSociales,
            totalOtrosGastos,
            resultadoAlMomento,
            gananciaOPerdida,
            deducciones,
            totalAPagar);
    }

    function obtenerResultadoBruto() {
        let totalVentas = 0;
        let totalCompras = 0;
        let totalIIBB = 0;   
        let totalSueldosyCargasSociales = 0;
        let totalOtrosGastos = 0;
        let resultadoBruto = 0; 
        let elemento;

        //Total Ventas
        elemento = document.getElementById("idTotalVentas");
        parseFloat(elemento.value) && (totalVentas = parseFloat(elemento.value));
        

        //Total Compras
        elemento = document.getElementById("idTotalCompras");
        parseFloat(elemento.value) && (totalCompras = parseFloat(elemento.value));

        //Total IIBB
        elemento = document.getElementById("idTotalIIBB");
        parseFloat(elemento.value) && (totalIIBB = parseFloat(elemento.value));

        //Total Sueldos y Cargas Sociales
        elemento = document.getElementById("idTotalSueldosyCargasSociales");
        parseFloat(elemento.value) && (totalSueldosyCargasSociales = parseFloat(elemento.value));

        //Total Otros Gastos
        elemento = document.getElementById("idTotalOtrosGastos");
        parseFloat(elemento.value) && (totalOtrosGastos = parseFloat(elemento.value));

        //Calculo
        resultadoBruto = totalVentas - totalCompras - totalSueldosyCargasSociales - totalOtrosGastos;

        return resultadoBruto;
    }

    function obtenerTotalAPagar() {
        let gananciaOPerdida = 0;
        let deducciones = 0;
        let totalAPagar = 0;
        let elemento;
        
        //Ganancia o Pérdida
        elemento = document.getElementById("idGananciaOPerdida");
        parseFloat(elemento.value) && (gananciaOPerdida = parseFloat(elemento.value));

        //Deducciones
        elemento = document.getElementById("idDeducciones");
        parseFloat(elemento.value) && (deducciones = parseFloat(elemento.value));

        totalAPagar = gananciaOPerdida - deducciones;

        return totalAPagar;
        
    }
