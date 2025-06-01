document.getElementById("showMoreBtn").addEventListener("click", function () {
  const content = document.getElementById("textContent");
  content.classList.toggle("collapsed");

  this.textContent = content.classList.contains("collapsed") ? "Show More" : "Show Less";
});
