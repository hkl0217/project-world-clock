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

let dublinElement = document.querySelector("#dublin");
let dublinDateElement = dublinElement.querySelector(".date");
let dublinTimeElement = dublinElement.querySelector(".time");
let dublinTime = moment().tz("Europe/Dublin");

dublinDateElement.innerHTML = dublinTime.format("MMMM Do YYYY");
dublinTimeElement.innerHTML = dublinTime.format("h:mm:ss [<small>]A[</small>]");

