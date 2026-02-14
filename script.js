const KEY = "beerCount";

document.addEventListener("DOMContentLoaded", () => {
  const countEl = document.getElementById("beerCount");
  const addBtn = document.getElementById("addBtn");
  const resetBtn = document.getElementById("resetBtn");

  // Load saved value
  countEl.textContent = localStorage.getItem(KEY) || 0;

  // Add beer
  addBtn.addEventListener("click", () => {
    let count = Number(localStorage.getItem(KEY)) || 0;
    count++;
    localStorage.setItem(KEY, count);
    countEl.textContent = count;
  });

  // Reset beers
  resetBtn.addEventListener("click", () => {
    if (confirm("Reset beer count? 🍺")) {
      localStorage.setItem(KEY, 0);
      // Go back to main Valentine page
      window.location.href = "index.html";
    }
  });
});
