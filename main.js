const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("container-box"),
};

function text(text) {
  text.textContent = "thank you for the input, have a nice day ( *・∀・)ノ゛";
}
DOMSelectors.button.addEventListener("click", function () {
  text(DOMSelectors.text);
});
function name() {
  DOMSelectors.getElementById("inputid").value = "";
}
