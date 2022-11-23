const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  input: document.getElementById("input"),
  img: document.getElementById("image"),
  button2: document.getElementById("btn2"),
};
function text(text) {
  text.textContent = "step 1 done";
}
function clearinput() {
  DOMSelectors.input.value = "";
}
function display() {
  DOMSelectors.img.insertAdjacentHTML("beforeend", (img.src = "pizza.jpg"));
}
DOMSelectors.button.addEventListener("click", function () {
  text(DOMSelectors.text);
  var answer = document.getElementById("input").value;
if var answer = "pizza" {display()}
});

function pizza() {
  img.src = "pizza.jpg";
}
