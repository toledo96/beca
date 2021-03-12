const url = 'https://api.republicofdevs.com/api/v1/zipcodes';
var datos = [];

let table = document.getElementById("data");
fetch(url)
    .then(response => response.json())
    .then(data => {
        datos.push(...data.content);
        var table1 = document.getElementById("tabla");
        var datosapi;

        for (let i = 0; i < datos.length; i++) {

            datosapi = datos[i];
            var row = table1.insertRow(-1);

            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);

            cell1.innerHTML = datosapi.codigoPostal;
            cell2.innerHTML = datosapi.asentamiento;
            cell3.innerHTML = datosapi.ciudad;
            cell4.innerHTML = datosapi.estado;


        }

        console.log(datos);
    })
    .catch(err => console.log(err))