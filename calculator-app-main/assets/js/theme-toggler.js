export default function themeToggler() {
  const calcToggler = document.querySelector(".calc__switcher");
  const theme = document.body;
  let side = true;
  calcToggler.addEventListener("click", (e) => {
    switch (e.target.style.left) {
      case "10%":
        e.target.style.left = "32%";
        document.body.setAttribute("class", "theme-two");
        break;
      case "32%":
        if (side === true) {
          e.target.style.left = "62%";
          document.body.setAttribute("class", "theme-three");
          side = false;
        } else {
          e.target.style.left = "10%";
          document.body.setAttribute("class", "theme-one");
          side = true;
        }

        break;
      case "62%":
        e.target.style.left = "32%";
        document.body.setAttribute("class", "theme-two");
        break;
    }
  });
}
