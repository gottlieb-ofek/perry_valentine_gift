document.addEventListener("DOMContentLoaded", () => {

  let countPerry = Number(localStorage.getItem("beerCountPerry")) || 0;
  let countGeva = Number(localStorage.getItem("beerCountGeva")) || 0;

  const countElPerry = document.getElementById("beerCountPerry");
  const countElGeva = document.getElementById("beerCountGeva");
  const countElTotal = document.getElementById("beerCountTotal");

  const progressPerry = document.getElementById("progressFillPerry");
  const progressGeva = document.getElementById("progressFillGeva");
  const progressTotal = document.getElementById("progressFillTotal");

  // Popups
  const popupAddPerry = document.getElementById("popupAddPerry");
  const popupSubPerry = document.getElementById("popupSubPerry");
  const popupAddGeva = document.getElementById("popupAddGeva");
  const popupSubGeva = document.getElementById("popupSubGeva");

  // Show popup on plus/minus click
  document.getElementById("addBtnPerry").addEventListener("click", () => popupAddPerry.style.display = "block");
  document.getElementById("subBtnPerry").addEventListener("click", () => popupSubPerry.style.display = "block");
  document.getElementById("addBtnGeva").addEventListener("click", () => popupAddGeva.style.display = "block");
  document.getElementById("subBtnGeva").addEventListener("click", () => popupSubGeva.style.display = "block");

  // Hide popup if click outside
  document.addEventListener("click", e => {
    if (!e.target.classList.contains("add-btn") && !e.target.classList.contains("sub-btn") && !e.target.closest(".popup-menu")) {
      popupAddPerry.style.display = "none";
      popupSubPerry.style.display = "none";
      popupAddGeva.style.display = "none";
      popupSubGeva.style.display = "none";
    }
  });

  // Function to change value
  function changeValue(side, value, add = true) {
    if (side === "Perry") {
      countPerry = add 
        ? Math.min(countPerry + value, 25) 
        : Math.max(countPerry - value, 0);
      localStorage.setItem("beerCountPerry", countPerry);
    } else if (side === "Geva") {
      countGeva = add
        ? Math.min(countGeva + value, 25)
        : Math.max(countGeva - value, 0);
      localStorage.setItem("beerCountGeva", countGeva);
    }
    updateProgress();
  }

  // Add event listeners for popup options
  popupAddPerry.querySelectorAll(".option").forEach(opt => {
    opt.addEventListener("click", () => { changeValue("Perry", Number(opt.dataset.value), true); popupAddPerry.style.display = "none"; });
  });
  popupSubPerry.querySelectorAll(".option").forEach(opt => {
    opt.addEventListener("click", () => { changeValue("Perry", Number(opt.dataset.value), false); popupSubPerry.style.display = "none"; });
  });
  popupAddGeva.querySelectorAll(".option").forEach(opt => {
    opt.addEventListener("click", () => { changeValue("Geva", Number(opt.dataset.value), true); popupAddGeva.style.display = "none"; });
  });
  popupSubGeva.querySelectorAll(".option").forEach(opt => {
    opt.addEventListener("click", () => { changeValue("Geva", Number(opt.dataset.value), false); popupSubGeva.style.display = "none"; });
  });

  // Update bars
  function updateProgress() {
    progressPerry.style.height = (countPerry / 25 * 100) + "%";
    progressGeva.style.height = (countGeva / 25 * 100) + "%";
    progressTotal.style.height = ((countPerry + countGeva) / 50 * 100) + "%";

    countElPerry.textContent = countPerry.toFixed(1) + " L";
    countElGeva.textContent = countGeva.toFixed(1) + " L";
    countElTotal.textContent = (countPerry + countGeva).toFixed(1) + " L";
  }

  updateProgress();
});
