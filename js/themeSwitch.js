var themeButton = document.getElementById("themeButton");
var buttonSwitch = document.getElementById("switch");

// On click event
themeButton.addEventListener("click", () => {
  let darkThemeActivated = document.body.classList.toggle("dark"); //Theme colors switch

  //Switch animation
  switch (darkThemeActivated) {
    case true:
      buttonSwitch.style.left = "26%";
      break;

    case false:
      buttonSwitch.style.left = "71%";
      break;
  }
});
