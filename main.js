var URL = "https://api.thecatapi.com/v1/images/search";
var imagen = document.querySelector("img");
var boton = document.querySelector("button");

function peticionGatito() {
   
    fetch(URL)
        .then(function (response) {
            
            return response.json();
        })
        .then(function (data) {
            console.log(data[0].url);
            imagen.src = data[0].url 
        })
        .catch(function (error) {
           
            console.log(error);
        });    
}

document.addEventListener("DOMContentLoaded", function () {
    peticionGatito();
});

boton.addEventListener("click", function () {
    peticionGatito();
});
