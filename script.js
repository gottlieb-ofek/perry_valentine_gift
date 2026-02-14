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

  // Reset beers (mobile-friendly, no confirm)
  resetBtn.addEventListener("click", () => {
    localStorage.setItem(KEY, 0);
    countEl.textContent = 0;   // update display immediately
    window.location.href = "index.html"; // go back to landing
  });
});
