const screen = document.querySelector(".calc__screen");
const buttons = document.querySelector(".calc__buttons").children;
const calc = (e) => {
  if (e.target.innerText === "RESET") {
    screen.innerText = "";
  } else if (e.target.innerText === "=") {
    if (
      screen.innerText.length !== 1 &&
      screen.innerText.charAt(0) !== "." &&
      screen.innerText.charAt(screen.innerText.length - 1) !== "."
    ) {
      screen.innerText = eval(screen.innerText);
    }
  } else if (e.target.innerText === "DEL") {
    screen.innerText = screen.innerText.slice(0, -1);
  } else {
    screen.innerText += e.target.innerText;
  }
};
export function calculator() {
  for (let button of buttons) {
    button.addEventListener("click", calc);
  }
}
