const pizza = document.createElement();
const hotdog = document.createElement();

const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  input: document.getElementById("input"),
  text: document.getElementById("#text2")
};

function text(text) {
  text.textContent = "step 1 done";
}
DOMSelectors.button.addEventListener("submit", function () {
  text(DOMSelectors.text);
});
function text(text) {
  text.textContent = "step 1 done";
}