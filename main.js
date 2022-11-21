const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  input: document.getElementById("input"),
  text2: document.getElementById("#text2"),
  img: document.getElementById("image"),
  button2: document.getElementById("btn2"),
  button3: document.getElementById("btn3"),
};
function text(text) {
  text.textContent = "step 1 done";
}
DOMSelectors.button.addEventListener("click", function () {
  text(DOMSelectors.text);
  var answer = document.getElementById("input").value;
  DOMSelectors.input.value = "";
  console.log(answer);
});

function hotdog() {
  img.src = "hotdog.jpg";
}
function pizza() {
  img.src = "pizza.jpg";
}
