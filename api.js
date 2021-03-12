const url = 'https://api.republicofdevs.com/api/v1/zipcodes';
var datos = [];

let table = document.getElementById("data");
fetch(url)
    .then(response => response.json())
    .then(data => {
        datos.push(...data.content);

        console.log(datos);
    })
    .catch(err => console.log(err))