setInterval (function() {

let manilaElement = document.querySelector("#manila");
let manilaDateElement = manilaElement.querySelector(".date");
let manilaTimeElement = manilaElement.querySelector(".time");
let manilaTime = moment().tz("Asia/Manila");

manilaDateElement.innerHTML = manilaTime.format("MMMM Do YYYY");
manilaTimeElement.innerHTML = manilaTime.format("h:mm:ss [<small>]A[</small>]");
}, 1000);

let gazaElement = document.querySelector("#gaza");
let gazaDateElement = gazaElement.querySelector(".date");
let gazaTimeElement = gazaElement.querySelector(".time");
let gazaTime = moment().tz("Asia/Gaza");

gazaDateElement.innerHTML = gazaTime.format("MMMM Do YYYY");
gazaTimeElement.innerHTML = gazaTime.format("h:mm:ss [<small>]A[</small>]");



function updateCity(event) {
let cityTimezone = event.target.value;
let cityTime = moment().tz(cityTimezone);
let cityName = cityTimezone.replace("_", " ").split("/")[1];
let cityElement = document.querySelector("#city");
    cityElement.innerHTML = `
    <div>
        <h2> ${cityName} </h2>
        <div clas="date"> ${cityTime.format("MMMM Do YYYY")} </div>
        <div clas="time">${cityTime.format("h:mm:ss")} <small> ${cityTime.format("A")}</small></div>
    </div>`;
}

let citySelectElement = document.querySelector("#city");

citySelectElement.addEventListener("change", updateCity)