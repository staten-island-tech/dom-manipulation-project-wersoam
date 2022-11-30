const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  input: document.getElementById("input"),
  img: document.getElementById("image"),
  button2: document.getElementById("btn2"),
  display: document.getElementById("display"),
  input2: document.getElementById("input2"),
  input3: document.getElementById("input3"),
};
function gettext() {
  if (DOMSelectors.input.value == "pizza") {
    DOMSelectors.img.src = "pizza.jpg";
  } else {
    DOMSelectors.img.src = "hotdog.jpg";
  }
}
function clearinput() {
  DOMSelectors.input.value = "";
  DOMSelectors.img.src = "question.png";
}

DOMSelectors.button.addEventListener("click", function () {
  var answer = DOMSelectors.input.value;
  gettext();
});
DOMSelectors.button2.addEventListener("click", function () {
  clearinput(DOMSelectors);
});
