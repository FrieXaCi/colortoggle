// DOM items
const btnToggleOn = document.querySelector("#btn-toggle");
const btnToggleOff = document.querySelector("#btn-toggle");
const btnToggleClick = document.querySelector("#btn-toggle");
const getSidebar = document.querySelector("aside");
const getColorList = document.querySelector("ul");
const getColorElement = document.querySelectorAll("li.color");
const getSelectedItem = document.querySelectorAll("color-group");

// dom-items voor chancing color and text
const bodyColor = document.querySelector("body");
const mainTitle = document.querySelector("header");
const colorBox = document.querySelector("article");
const textTitle = document.querySelector("#text-title");
const secondTextTitle = document.querySelector("#second-text-title");
const par1 = document.querySelector("#par1");
const par2 = document.querySelector("#par2");

// click items color toggle
const getRood = document.querySelector("#rood");
const getOranje = document.querySelector("#oranje");
const getGeel = document.querySelector("#geel");
const getRoze = document.querySelector("#roze");
const getBlauw = document.querySelector("#blauw");
const getGroen = document.querySelector("#groen");
const getTurqoise = document.querySelector("#turqoise");
const getViolet = document.querySelector("#violet");
const getBruin = document.querySelector("#bruin");

// radio button
// select de click events
const radioRed = document.querySelector("#rood1");
const radioOrange = document.querySelector("#oranje1");
const radioYellow = document.querySelector("#geel1");
const radioPink = document.querySelector("#roze1");
const radioGreen = document.querySelector("#groen1");
const radioBlue = document.querySelector("#blauw1");
const radioTurqoise = document.querySelector("#turqoise1");
const radioViolet = document.querySelector("#violet1");
const radioBrown = document.querySelector("#bruin1");
//make change click events
const setRadioRed = document.querySelector("#rood");
const setRadioOrange = document.querySelector("#oranje");
const setRadioYellow = document.querySelector("#geel");
const setRadioPink = document.querySelector("#roze");
const setRadioGreen = document.querySelector("#groen");
const setRadioBlue = document.querySelector("#blauw");
const setRadioTurqoise = document.querySelector("#turqoise");
const setRadioViolet = document.querySelector("#violet");
const setRadioBrown = document.querySelector("#bruin");

getSidebar.addEventListener("click", function () {
  if (radioRed.checked === true) {
    setRadioRed.classList.remove("removeOpacity");
    setRadioRed.classList.add("opacity");
  } else {
    setRadioRed.classList.remove("opacity");
    setRadioRed.classList.add("removeOpacity");
  }
  if (radioOrange.checked === true) {
    setRadioOrange.classList.remove("removeOpacity");
    setRadioOrange.classList.add("opacity");
  } else {
    setRadioOrange.classList.remove("opacity");
    setRadioOrange.classList.add("removeOpacity");
  }
  if (radioYellow.checked === true) {
    setRadioYellow.classList.remove("removeOpacity");
    setRadioYellow.classList.add("opacity");
  } else {
    setRadioYellow.classList.remove("opacity");
    setRadioYellow.classList.add("removeOpacity");
  }
  if (radioPink.checked === true) {
    setRadioPink.classList.remove("removeOpacity");
    setRadioPink.classList.add("opacity");
  } else {
    setRadioPink.classList.remove("opacity");
    setRadioPink.classList.add("removeOpacity");
  }
  if (radioGreen.checked === true) {
    setRadioGreen.classList.remove("removeOpacity");
    setRadioGreen.classList.add("opacity");
  } else {
    setRadioGreen.classList.remove("opacity");
    setRadioGreen.classList.add("removeOpacity");
  }
  if (radioBlue.checked === true) {
    setRadioBlue.classList.remove("removeOpacity");
    setRadioBlue.classList.add("opacity");
  } else {
    setRadioBlue.classList.remove("opacity");
    setRadioBlue.classList.add("removeOpacity");
  }
  if (radioTurqoise.checked === true) {
    setRadioTurqoise.classList.remove("removeOpacity");
    setRadioTurqoise.classList.add("opacity");
  } else {
    setRadioTurqoise.classList.remove("opacity");
    setRadioTurqoise.classList.add("removeOpacity");
  }
  if (radioViolet.checked === true) {
    setRadioViolet.classList.remove("removeOpacity");
    setRadioViolet.classList.add("opacity");
  } else {
    setRadioViolet.classList.remove("opacity");
    setRadioViolet.classList.add("removeOpacity");
  }
  if (radioBrown.checked === true) {
    setRadioBrown.classList.remove("removeOpacity");
    setRadioBrown.classList.add("opacity");
  } else {
    setRadioBrown.classList.remove("opacity");
    setRadioBrown.classList.add("removeOpacity");
  }
});

//Functions

// radio button checked

// open toggle menu
let openMenu = function () {
  getSidebar.style.width = "15%";
  colorBox.style.width = "70%";
  for (let i = 0; i < getColorElement.length; i++) {
    getColorElement[i].style.visibility = "visible";
    getColorElement[i].style.paddingLeft = "10px";
  }
  getColorList.style.visibility = "visible";
};

// op sidebar blijven / mousemover

let stayOnMenu = () => {
  getSidebar.style.width = "15%";
  colorBox.style.width = "70%";
  for (let i = 0; i < getColorElement.length; i++) {
    getColorElement[i].style.visibility = "visible";
    getColorElement[i].style.paddingLeft = "10px";
  }
  getColorList.style.visibility = "visible";
};

// close toggle menu

let closeMenu = () => {
  colorBox.style.width = "90%";
  getSidebar.style.width = "0";
  getSidebar.style.transition = "all 0.3s ease-out";
  for (let i = 0; i < getColorElement.length; i++) {
    getColorElement[i].style.visibility = "hidden";
  }
  getColorList.style.visibility = "hidden";
};

// functie togglebar

btnToggleOn.addEventListener("mouseover", function (e) {
  e.preventDefault();
  openMenu();
});

getSidebar.addEventListener("mousemove", function (e) {
  e.preventDefault();
  stayOnMenu();
});

getSidebar.addEventListener("mouseleave", function (e) {
  e.preventDefault();
  closeMenu();
});

btnToggleOff.addEventListener("mouseleave", function (e) {
  e.preventDefault();
  closeMenu();
});

// functie kleur en tekst achtergrond

let changeColor = (color1) => {
  bodyColor.style.background = color1;
};
//backgroundfunction voor keyEvent en clickEvent
const setRood = () => {
  closeMenu();
  changeColor("rgb(204,0,68)");
  colorBox.classList.remove(
    "removeClass",
    "orange",
    "yellow",
    "pink",
    "green",
    "blue",
    "turqois",
    "violet",
    "brown"
  );
  colorBox.classList.add("red");
  textTitle.innerText = "Rood";
  secondTextTitle.innerText =
    "Actief | Energiek | Leiderschap | Daadkracht | Passie";
  par1.innerText =
    "Rood is de kleur die het eerste wordt waargenomen, want zij heeft de laagste frequentie van alle kleuren, rood komt op je af. Vandaar dat zij wereldwijd als signaalkleur fungeert.";
  par2.innerText =
    "Rood is een actieve kleur aan de warme kant van het kleurenspectrum. Rood is de kleur van levenslust en veerkracht. Deze kleur vormt de basis van ons bestaan. Het is de kleur van liefde, passie en moed.";
};
const setOranje = () => {
  closeMenu();
  changeColor("rgb(255, 85, 0)");
  colorBox.classList.remove(
    "removeClass",
    "red",
    "yellow",
    "pink",
    "green",
    "blue",
    "turqois",
    "violet",
    "brown"
  );
  colorBox.classList.add("orange");
  textTitle.innerText = "Oranje";
  secondTextTitle.innerText =
    "Warm | Optimistisch | Spontaan | Sociaal | Creatief";
  par1.innerText =
    "Oranje is de kleur van creatieve scheppende levenskracht, invoelendheid en positieve sociale contacten.";
  par2.innerText =
    "De kleur is stralend en zorgt ervoor dat je opgewekt en positief in het leven staat.";
};
const setGeel = () => {
  closeMenu();
  changeColor("rgb(199, 165, 10)");
  colorBox.classList.remove(
    "removeClass",
    "red",
    "orange",
    "pink",
    "green",
    "blue",
    "turqois",
    "violet",
    "brown"
  );
  colorBox.classList.add("yellow");
  textTitle.innerText = "Geel";
  secondTextTitle.innerText =
    "Vernieuwend | Mentaal sterk | Bewegelijk | Opgewekt";
  par1.innerText =
    "Van alle kleuren bevat geel het meeste licht. Het is een krachtige stralende kleur en kleurentherapeuten adviseren geel dan ook als het middel tegen neerslachtigheid,";
  par2.innerText =
    "Geel symboliseert de zon en nieuw leven en staat voor activiteit en positief denken. Geel is de kleur van licht, kracht, energie en wijsheid. Met geel kan je zelfverzekerd in het leven staan.";
};
const setRoze = () => {
  closeMenu();
  changeColor("rgb(255,25,179)");
  colorBox.classList.remove(
    "removeClass",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "turqois",
    "violet",
    "brown"
  );
  colorBox.classList.add("pink");
  textTitle.innerText = "Roze";
  secondTextTitle.innerText =
    "Zorgzaam | Sensitief | Voedend | Onvoorwaardelijk";
  par1.innerText =
    "Roze is de kleur van onvoorwaardelijke liefde, vrouwelijkheid, zachtheid en kwetsbaarheid. Magenta is een combinatie van rood en violet en staat voor sensualiteit en weelderigheid.";
  par2.innerText =
    "De naam komt van een Italiaans dorp in Lombardije waar een bloedig gevecht heeft plaatsgevonden. Roze wordt ook wel fuchsia genoemd naar de kleurstof fuschine die de Fransen hebben ontwikkeld.";
};
const setGroen = () => {
  closeMenu();
  changeColor("rgb(0, 100, 0)");
  colorBox.classList.remove(
    "removeClass",
    "red",
    "orange",
    "yellow",
    "pink",
    "blue",
    "turqois",
    "violet",
    "brown"
  );
  colorBox.classList.add("green");
  textTitle.innerText = "Groen";
  secondTextTitle.innerText =
    "Balans | Groei | Gezond | Overvloed | Veilig | Stabiel";
  par1.innerText =
    "Groen is de kleur van evenwicht, harmonie en groei. De kleur groen is rustig en schenkt je in overvloed alles wat je in dit leven nodig hebt.";
  par2.innerText =
    "Groen is ook de kleur van de natuur en de toekomst. Zij werkt kalmerend op lichaam en geest en staat voor inzicht, wijsheid en toewijding.";
};
const setBlauw = () => {
  closeMenu();
  changeColor("rgb(0, 3, 199)");
  colorBox.classList.remove(
    "removeClass",
    "red",
    "orange",
    "yellow",
    "pink",
    "green",
    "turqois",
    "violet",
    "brown"
  );
  colorBox.classList.add("blue");
  textTitle.innerText = "Blauw";
  secondTextTitle.innerText =
    "Communicatie | Zakelijk | Ruimte gevend | Betrouwbaar";
  par1.innerText =
    "Blauw is de kleur van de vrede, eenheid, openheid en harmonie. Blauw symboliseert de verstilling en oneindigheid, het is de kleur van de hemel en de zee. Blauw geeft je een gevoel van ruimte.";
  par2.innerText =
    "Blauw is een primaire kleur aan de koele kant van het kleurenspectrum, maar omvat ook warmere tinten, die richting violet gaan. Net als groen is blauw kalmerend en bevordert deze kleur het denken en de concentratie.";
};
const setTurqoise = () => {
  closeMenu();
  changeColor("rgb(4, 147, 146)");
  colorBox.classList.remove(
    "removeClass",
    "red",
    "orange",
    "yellow",
    "pink",
    "green",
    "blue",
    "violet",
    "brown"
  );
  colorBox.classList.add("turqois");
  textTitle.innerText = "Turquoise";
  secondTextTitle.innerText = "Expressief | Individualisctisch | Avontuurlijk";
  par1.innerText = "Stimuleert je persoonlijke ontwikkeling.";
  par2.innerText = "De kleur spoort je aan je eigen pad te vinden.";
};
const setViolet = () => {
  closeMenu();
  changeColor("rgb(185, 11, 210)");
  colorBox.classList.remove(
    "removeClass",
    "red",
    "orange",
    "yellow",
    "pink",
    "green",
    "blue",
    "turqois",
    "brown"
  );
  colorBox.classList.add("violet");
  textTitle.innerText = "Violet";
  secondTextTitle.innerText =
    "Inspiratie | Zelfreflectie | Verdieping | Onconventioneel | Fantasie";
  par1.innerText =
    "Violet is de kleur die kunstenaars, mystici en de spiritueel ontwikkelden haar inspiratie geeft.";
  par2.innerText = "Het is de kleur van vertrouwen, intuïtie en mystiek.";
};
const setBruin = () => {
  closeMenu();
  changeColor("rgb(117,59,0)");
  colorBox.classList.remove(
    "removeClass",
    "red",
    "orange",
    "yellow",
    "pink",
    "green",
    "blue",
    "turqois",
    "violet"
  );
  colorBox.classList.add("brown");
  textTitle.innerText = "Bruin";
  secondTextTitle.innerText = "Basis | Veilig | Vertrouwd | Betrouwbaar";
  par1.innerText =
    "Bruin is de kleur van de aarde. Altijd aanwezig maar nooit opdringerig. Een uitgesproken basiskleur: Neutraal, natuurlijk en sfeervol.";
  par2.innerText =
    "Bruintinten houden ons met beide benen op de grond en zorgen voor rust en evenwicht in hoofd en huis.";
};

// change backgroundcolor and text

getRood.addEventListener("click", function (e) {
  e.preventDefault();
  setRood();
});

getOranje.addEventListener("click", function (e) {
  e.preventDefault();
  setOranje();
});

getGeel.addEventListener("click", function (e) {
  e.preventDefault();
  setGeel();
});

getRoze.addEventListener("click", function (e) {
  e.preventDefault();
  setRoze();
});

getGroen.addEventListener("click", function (e) {
  e.preventDefault();
  setGroen();
});

getBlauw.addEventListener("click", function (e) {
  e.preventDefault();
  setBlauw();
});

getTurqoise.addEventListener("click", function (e) {
  e.preventDefault();
  setTurqoise();
});

getViolet.addEventListener("click", function (e) {
  e.preventDefault();
  setViolet();
});

getBruin.addEventListener("click", function (e) {
  e.preventDefault();
  setBruin();
});

//selectie met nummers werkt

document.addEventListener("keydown", function (e) {
  e.preventDefault;
  if (e.code === "Digit1") {
    e.preventDefault();
    setRood();
  } else if (e.code === "Digit2") {
    e.preventDefault();
    setOranje();
  } else if (e.code === "Digit3") {
    e.preventDefault();
    setGeel();
  } else if (e.code === "Digit4") {
    e.preventDefault();
    setRoze();
  } else if (e.code === "Digit5") {
    e.preventDefault();
    setGroen();
  } else if (e.code === "Digit6") {
    e.preventDefault();
    setBlauw();
  } else if (e.code === "Digit7") {
    e.preventDefault();
    setTurqoise();
  } else if (e.code === "Digit8") {
    e.preventDefault();
    setViolet();
  } else if (e.code === "Digit9") {
    e.preventDefault();
    setBruin();
  }
});
