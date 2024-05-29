setInterval (function() {

let manilaElement = document.querySelector("#manila");
let manilaTime = moment().tz("Asia/Manila");
let manilaDateElement = manilaElement.querySelector(".date");
let manilaTimeElement = manilaElement.querySelector(".time");

manilaDateElement.innerHTML = manilaTime.format("MMMM Do YYYY");
manilaTimeElement.innerHTML = manilaTime.format("h:mm:ss [<small>]A[</small>]");

let gazaElement = document.querySelector("#gaza");
let gazaTime = moment().tz("Asia/Gaza");
let gazaDateElement = gazaElement.querySelector(".date");
let gazaTimeElement = gazaElement.querySelector(".time");

gazaDateElement.innerHTML = gazaTime.format("MMMM Do YYYY");
gazaTimeElement.innerHTML = gazaTime.format("h:mm:ss [<small>]A[</small>]");

}, 1000);


function updateCity(event) {
let cityTimezone = event.target.value;
let cityTime = moment().tz(cityTimezone);
console.log(cityTimezone);

let citiesSelectElement = document.querySelector("#cities");

citiesSelectElement.addEventListener("change", updateCity)