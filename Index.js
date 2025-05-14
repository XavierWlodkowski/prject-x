//search balk
window.onscroll = function () {
    stickFunction();
  };
  const searchBar = document.getElementById("search-bar");
  const container = document.querySelector(".image-container");
  const sticky =
    container.offsetTop + container.offsetHeight / 2 - searchBar.offsetHeight / 2;
  function stickFunction() {
    if (window.pageYOffset > sticky) {
      searchBar.classList.add("sticky");
    } else {
      searchBar.classList.remove("sticky");
    }
  }
  
  //backround beweging
const imageContainer = document.querySelector('.image-container');
function moveBackground(e) {
  const width = imageContainer.offsetWidth;
  const height = imageContainer.offsetHeight;
  const x = e.clientX;
  const y = e.clientY;
  const moveX = (x / width) * 12;
  const moveY = (y / height) * 12;
  imageContainer.style.backgroundPosition = `${moveX}% ${moveY}%`;
}
imageContainer.addEventListener('mousemove', moveBackground);
