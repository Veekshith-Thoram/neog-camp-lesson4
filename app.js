var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputText = document.querySelector("#output")

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function construtUrl(text){
    return serverUrl + "?" + "text=" + text; 
}

function errorhandler(error){
    console.log("An error occured ", error);
    alert("Something wrong with server, try after some time!!")
}
//this is what it means call back function!!
function clickHandler() {
    var inputText = txtInput.value;

    fetch (construtUrl(inputText))
    .then(response =>  response.json())
    .then(json => outputText.innerText=json.contents.translated)
    .catch(errorhandler)
    
    
}
btnTranslate.addEventListener("click", clickHandler );