const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const nameParam = urlParams.get('name')
const emailParam = urlParams.get('email')
const phoneParam = urlParams.get('phoneNumber')
const gustoParam = urlParams.get('gustoValue')
const percentajeParam = urlParams.get('percentaje')

const userName = document.getElementById('name');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const gustos = document.getElementById('gustos');
const percentaje = document.getElementById('percentage');


document.addEventListener("DOMContentLoaded", function(event) {
    userName.innerHTML = nameParam;
    email.innerHTML = emailParam;
    phoneNumber.innerHTML = phoneParam;
    gustos.innerHTML = gustoParam;
    percentaje.innerHTML = percentajeParam;

});