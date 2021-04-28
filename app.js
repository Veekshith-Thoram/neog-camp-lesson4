var btnTranslate = document.querySelector("#btn-tanslate");
var txtInput = document.querySelector("#txt-input");
var outputText = document.querySelector("#output")


//this is what it means call back function!!
function clickHandler() {
    outputText.innerText = "Pushpa" + txtInput.value;
    
}
btnTranslate.addEventListener("click", clickHandler);