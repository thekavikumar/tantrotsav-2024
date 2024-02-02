for (i = 0; i < 150; i++) {
  document.querySelector(".stars").innerHTML +=
    '<div class="star" style="--x:${window.innerWidth * Math.random()};--y:${window.innerHeight * Math.random()}"></div>';
}
