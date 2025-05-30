 document.addEventListener("DOMContentLoaded", () => {
    const filterItems = document.querySelectorAll("main ul li");
    const legendCards = document.querySelectorAll(".legend-card");

    filterItems.forEach(item => {
      item.addEventListener("click", () => {
        const filter = item.getAttribute("data-filter");

        legendCards.forEach(card => {
          const cardClass = card.getAttribute("data-class");

          if (filter === "all" || cardClass === filter) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  });