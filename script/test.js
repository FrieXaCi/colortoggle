const changeOpacity = () => {
  if (changeRed.checked === true) {
    getRood.classList.remove(
      "removeOpacity",
      "opacityOrange",
      "opacityYellow",
      "opacityPink",
      "opacityGreen",
      "opacityBlue",
      "opacityTurqoise",
      "opacityViolet",
      "opacityBrown"
    );
    getRood.classList.add("OpacityRed");
  }
  if (changeOrange.checked === true) {
    getOranje.classList.remove(
      "removeOpacity",
      "opacityRed",
      "opacityOrange",
      "opacityYellow",
      "opacityPink",
      "opacityGreen",
      "opacityBlue",
      "opacityTurqoise",
      "opacityViolet",
      "opacityBrown"
    );
    getOranje.classList.add("OpacityOrange");
  }
};
// change opacity when radio button is clicked
let changeRed = document.querySelector("#rood1");
let changeOrange = document.querySelector("#oranje1");
let changeYellow = document.querySelector("#geel1");
let changePink = document.querySelector("#roze1");
let changeGreen = document.querySelector("#groen1");
let changeBlauw = document.querySelector("#blauw1");
let changeTurqoise = document.querySelector("#turqoise1");
let changeViolet = document.querySelector("#violet1");
let changeBrown = document.querySelector("#bruin1");
