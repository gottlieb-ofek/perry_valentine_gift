const KEY_PERRY = "beerCountPerry";
const KEY_GEVA = "beerCountGeva";
const MAX_BEERS = 10;

document.addEventListener("DOMContentLoaded", () => {

  // ===== Perry =====
  const countElPerry = document.getElementById("beerCountPerry");
  const addBtnPerry = document.getElementById("addBtnPerry");
  const subBtnPerry = document.getElementById("subBtnPerry");
  let countPerry = Number(localStorage.getItem(KEY_PERRY)) || 0;

  // ===== Geva =====
  const countElGeva = document.getElementById("beerCountGeva");
  const addBtnGeva = document.getElementById("addBtnGeva");
  const subBtnGeva = document.getElementById("subBtnGeva"); // fixed variable name
  let countGeva = Number(localStorage.getItem(KEY_GEVA)) || 0;

  // ===== Total =====
  const progressTotal = document.getElementById("progressFillTotal");
  const countElTotal = document.getElementById("beerCountTotal");

  // Initial render
  countElPerry.textContent = countPerry;
  countElGeva.textContent = countGeva;
  countElTotal.textContent = countPerry + countGeva;
  updateProgress();

  // ----- Perry buttons -----
  addBtnPerry.addEventListener("click", () => {
    if (countPerry < MAX_BEERS) countPerry++;
    localStorage.setItem(KEY_PERRY, countPerry);
    countElPerry.textContent = countPerry;
    updateProgress();
  });

  subBtnPerry.addEventListener("click", () => {
    if (countPerry > 0) countPerry--; // prevent negative
    localStorage.setItem(KEY_PERRY, countPerry);
    countElPerry.textContent = countPerry;
    updateProgress();
  });

  // ----- Geva buttons -----
  addBtnGeva.addEventListener("click", () => {
    if (countGeva < MAX_BEERS) countGeva++;
    localStorage.setItem(KEY_GEVA, countGeva);
    countElGeva.textContent = countGeva;
    updateProgress();
  });

  subBtnGeva.addEventListener("click", () => {
    if (countGeva > 0) countGeva--; // prevent negative
    localStorage.setItem(KEY_GEVA, countGeva);
    countElGeva.textContent = countGeva;
    updateProgress();
  });

  // ----- Update all progress bars -----
  function updateProgress() {
    const percentPerry = Math.min((countPerry / MAX_BEERS) * 100, 100);
    const percentGeva = Math.min((countGeva / MAX_BEERS) * 100, 100);
    const percentTotal = Math.min(((countPerry + countGeva) / (MAX_BEERS*2)) * 100, 100);

    document.getElementById("progressFillPerry").style.height = percentPerry + "%";
    document.getElementById("progressFillGeva").style.height = percentGeva + "%";
    progressTotal.style.height = percentTotal + "%";

    // update total count text
    countElTotal.textContent = countPerry + countGeva;
  }

});
