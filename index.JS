let manilaElement = document.querySelector("#manila");
let manilaDateElement = manilaElement.querySelector(".date");
let manilaTime = moment();
let manilaTimeElement = manilaElement.querySelector(".time");

manilaDateElement.innerHTML = manilaTimeElement.format("MMMM Do YYYY");
manilaTimeElement.innerHTML = manilaTime.format("h:mm:ss [<small>]A[</small>]");