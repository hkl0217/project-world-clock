let manilaElement = document.querySelector("#manila");
let manilaDateElement = manilaElement.querySelector(".date");
let manilaTime = moment().tz("Asia/Manila");
let manilaTimeElement = manilaElement.querySelector(".time");

manilaDateElement.innerHTML = manilaTime.format("MMMM Do YYYY");
manilaTimeElement.innerHTML = manilaTime.format("h:mm:ss [<small>]A[</small>]");

let gazaElement = document.querySelector("#gaza");
let gazaDateElement = gazaElement.querySelector(".date");
let gazaTime = moment().tz("Asia/Gaza");
let gazaTimeElement = gazaElement.querySelector(".time");

gazaDateElement.innerHTML = gazaTime.format("MMMM Do YYYY");
gazaTimeElement.innerHTML = gazaTime.format("h:mm:ss [<small>]A[</small>]");