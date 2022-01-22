const advertencia = document.getElementById('advertencia');
const botones = document.getElementById('botones');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const gustos = document.getElementById('gustos');
const buttonGustos = document.getElementById('button-gustos');
const table = document.getElementById('table');
const form = document.getElementById('form')
const row = document.getElementById('row');
const cell1 = document.getElementById('gustoValue');
const cell2 = document.getElementById('percentajeValue');
const cell3 = document.getElementById('edit');

var bool = true;

document.addEventListener("DOMContentLoaded", function(event) {
    botones.style.display = "none";
    advertencia.style.display = "none";
});

buttonGustos.onclick = function(event) {

    if (bool == true) {

        row.removeAttribute("hidden");

        cell1.value = gustos.value;
        cell2.value = 0;

        cell3.onclick = function(event) {

            cell1.removeAttribute("disabled");
            cell2.removeAttribute("disabled");

        };

        botones.style.display = "";
        advertencia.style.display = "";

        bool = false;
    } else {

        bool = true;
        buttonGustos.click();
    }

};