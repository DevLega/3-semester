const KeyEventOutput = document.getElementById("KeyEventOutput");
const keyAndCodeOutput = document.getElementById("keyAndCodeOutput");
const inputKeyEvent = document.getElementById("inputKeyEvent");
const combinationOutput = document.getElementById("combinationOutput");
const mouseOutput = document.getElementById("mouseOutput");
const mouseCoordinatesOutput = document.getElementById(
  "mouseCoordinatesOutput"
);

inputKeyEvent.addEventListener("keydown", () => {
  KeyEventOutput.innerHTML = "keydown";
});

inputKeyEvent.addEventListener("keyup", () => {
  KeyEventOutput.innerHTML = "keyup";
});

inputKeyEvent.addEventListener("keypress", () => {
  KeyEventOutput.innerHTML = "keypress";
});

document.addEventListener("keydown", (event) => {
  keyAndCodeOutput.innerHTML = `Key: ${event.key} Code: ${event.code}`;
  if (event.ctrlKey && event.key === "s") {
    event.preventDefault();
    combinationOutput.innerHTML = "Ctrl + S";
  }
});

mouseOutput.addEventListener(
  "mousedown",
  () => (mouseOutput.style.backgroundColor = "blue")
);
mouseOutput.addEventListener(
  "mouseup",
  () => (mouseOutput.style.backgroundColor = "lightblue")
);
mouseOutput.addEventListener(
  "mouseover",
  () => (mouseOutput.style.color = "green")
);
mouseOutput.addEventListener(
  "mouseout",
  () => (mouseOutput.style.color = "lightgreen")
);

//

document.addEventListener("mousemove", (event) => {
  mouseCoordinatesOutput.innerHTML = `X: ${event.clientX} Y: ${event.clientY}`;
});
