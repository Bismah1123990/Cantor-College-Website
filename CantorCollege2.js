// JavaScript source code
function openMap()

{
	document.getElementById("mapPopup").style.display = "block";
}

function closeMap()

{
	document.getElementById("mapPopup").style.display = "none";
}

window.onclick = function(event) 
{
  const popup = document.getElementById("mapPopup");
  if (event.target === popup) {
    popup.style.display = "none";
  }
}

let index = 0;

function showSlide(i) {
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel img");

  if (i >= slides.length) index = 0;
  else if (i < 0) index = slides.length - 1;
  else index = i;

  track.style.transform = "translateX(-" + index * 100 + "%)";
}

function nextSlide() {
  showSlide(index + 1);
}

function prevSlide() {
  showSlide(index - 1);
}

