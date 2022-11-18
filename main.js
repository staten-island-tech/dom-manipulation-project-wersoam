const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  input: document.getElementById("input"),
  text2: document.getElementById("#text2"),
};

function text(text) {
  text.textContent = "step 1 done";
}

DOMSelectors.button.addEventListener("click", function () {
  text(DOMSelectors.text);
  DOMSelectors.input.value = "";
});
