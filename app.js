var btnTranslate = document.querySelector("#btn-tanslate");
var txtInput = document.querySelector("#txt-input");

console.log(txtInput);

//this is what it means call back function!!
function clickHandler() {
    console.log("Clicked!!");
    console.log("input", txtInput.value);
}
btnTranslate.addEventListener("click", clickHandler);