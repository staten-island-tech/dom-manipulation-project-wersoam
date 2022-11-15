const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("container-box"),
  points: document.querySelectorAll(".point"),
  null: document.getElementById("point"),
};

function backgroundtext(background, text) {
  background.style.backgroundColor = "red";
  text.textContent = "this is now a big bigger red box";
  text.style.fontSize = "40px";
}
DOMSelectors.button.addEventListener("click", function () {
  backgroundtext(DOMSelectors.box, DOMSelectors.text);
});
