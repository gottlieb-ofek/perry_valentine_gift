const KEY = "beerCount";

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("beerCount");
  el.textContent = localStorage.getItem(KEY) || 0;

  document.getElementById("addBtn").addEventListener("click", () => {
    let count = Number(localStorage.getItem(KEY)) || 0;
    count++;
    localStorage.setItem(KEY, count);
    el.textContent = count;
  });
});
