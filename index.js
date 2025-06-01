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

