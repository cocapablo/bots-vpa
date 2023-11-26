function enviarWhatsApp(nombre="Nombre Default", totalVentas=1000, totalCompras=1000, totalIIBB=1000, totalSueldosyCargasSociales=1000, totalOtrosGastos=1000, resultadoAlMomento=1000, gananciaOPerdida=1000, deducciones=1000, totalAPagar=1000) {
    let botId = '172592529265043';
    let phoneNbr = '541134821708';
    let bearerToken = 'EAAUOk6srG94BOyCzZChQDqOQ03q93NTYmkQTYbtwubFKsZAeEQ48Y8tfTV8tJX0AuxCZC1QOZAc1ANqy03zFhGJ64GWJ6fpdHp5oS7lrTgFkv8b1gY9rXgmtX3rhWkNmLfEPtKZBZAweHZBBV8IiRncgi5kNzTxEFLt0K9lloKdx0IQfWVXJbajFMcOfKn1ykFhHQRCcirhbknX8rvByZCYorI1J20uIZBfGs';

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
        console.log(res);
        res.error ? alert("ERROR el enviar el mensaje\n" + res.error.message) : alert("Mensaje enviado con éxito");
        ;
    })
    .catch(error => {
        console.log(error);
        alert("ERROR el enviar el mensaje\n" + error);
        });
           
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

        //Resultado al Momento
        elemento = document.getElementById("idResultadoAlMomento");
        parseFloat(elemento.value) && (resultadoAlMomento = parseFloat(elemento.value));

        //Ganancia o Pérdida
        elemento = document.getElementById("idGananciaOPerdida");
        parseFloat(elemento.value) && (gananciaOPerdida = parseFloat(elemento.value));

        //Deducciones
        elemento = document.getElementById("idDeducciones");
        parseFloat(elemento.value) && (deducciones = parseFloat(elemento.value));

        //Total a Pagar
        elemento = document.getElementById("idTotalAPagar");
        parseFloat(elemento.value) && (totalAPagar = parseFloat(elemento.value));

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
