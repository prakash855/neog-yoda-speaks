var buttonTranslate = document.querySelector("#btn");
var text = document.querySelector("#txt");
var output = document.querySelector("#output");

var serverURL = `https://api.funtranslations.com/translate/yoda.json`;

function getTranslatedURL(istext) {
  return `${serverURL}?text=${istext}`;
}

const errorHandler = (error) => {
  console.log(`error occured ${error}`);
  alert("something is wrong with server please try again");
};

function clickEventHandler() {
  var textAreaInput = text.value;
  fetch(getTranslatedURL(textAreaInput))
    .then((res) => res.json())
    .then((json) => (output.innerText = json.contents.translated))
    .catch(errorHandler);
}

buttonTranslate.addEventListener("click", clickEventHandler);