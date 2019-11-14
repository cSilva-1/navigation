


function toggleMenu(x) {
  
  x.classList.toggle("cross");

  L1nav.classList.toggle("closedMenu");



  var menuText = document.getElementById("menuText");
  if (menuText.innerHTML === "Menu") {
    menuText.innerHTML = "Close";
  } else {
    menuText.innerHTML = "Menu";
  }
  
}
