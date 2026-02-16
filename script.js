document.addEventListener("DOMContentLoaded", () => {
  let countPerry = Number(localStorage.getItem("beerCountPerry")) || 0;
  let countGeva = Number(localStorage.getItem("beerCountGeva")) || 0;

  const countElPerry = document.getElementById("beerCountPerry");
  const countElGeva = document.getElementById("beerCountGeva");
  const countElTotal = document.getElementById("beerCountTotal");

  const progressPerry = document.getElementById("progressFillPerry");
  const progressGeva = document.getElementById("progressFillGeva");
  const progressTotal = document.getElementById("progressFillTotal");

  const totalImage = document.getElementById("totalImage");

  // Popups
  const popupAddPerry = document.getElementById("popupAddPerry");
  const popupSubPerry = document.getElementById("popupSubPerry");
  const popupAddGeva = document.getElementById("popupAddGeva");
  const popupSubGeva = document.getElementById("popupSubGeva");

  // Show popup on click
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

  // Popup option events
  function addPopupEvents(popup, side, add) {
    popup.querySelectorAll(".option").forEach(opt => {
      opt.addEventListener("click", () => {
        changeValue(side, Number(opt.dataset.value), add);
        popup.style.display = "none";
      });
    });
  }

  addPopupEvents(popupAddPerry, "Perry", true);
  addPopupEvents(popupSubPerry, "Perry", false);
  addPopupEvents(popupAddGeva, "Geva", true);
  addPopupEvents(popupSubGeva, "Geva", false);

  // Milestone images
  const imageMilestones = [
    { threshold: 0, src: 'liters_images/liter_0.JPG' },
    { threshold: 1.5, src: 'liters_images/liter_1.5.JPG' },
    { threshold: 3.7, src: 'liters_images/liter_3.7.JPG' },
    { threshold: 6.7, src: 'liters_images/liter_6.7.JPG' },
    { threshold: 9, src: 'liters_images/liter_9.JPG' },
    { threshold: 12, src: 'liters_images/liter_12.JPG' },
    { threshold: 15, src: 'liters_images/liter_15.JPG' },
    { threshold: 18, src: 'liters_images/liter_18.JPG' },
    { threshold: 21, src: 'liters_images/liter_21.JPG' },
    { threshold: 25, src: 'liters_images/liter_25.JPG' }
  ];

  // Update bars and image
  function updateProgress() {
    progressPerry.style.height = (countPerry / 25 * 100) + "%";
    progressGeva.style.height = (countGeva / 25 * 100) + "%";
    progressTotal.style.height = ((countPerry + countGeva) / 50 * 100) + "%";

    countElPerry.textContent = countPerry.toFixed(1) + " L";
    countElGeva.textContent = countGeva.toFixed(1) + " L";
    const totalLiters = countPerry + countGeva;
    countElTotal.textContent = totalLiters.toFixed(1) + " L";

    // Find milestone image
    let imageToShow = null;
    for (let i = 0; i < imageMilestones.length; i++) {
      if (totalLiters >= imageMilestones[i].threshold) {
        imageToShow = imageMilestones[i].src;
      }
    }
    if (imageToShow) {
      totalImage.src = imageToShow;
      totalImage.style.display = 'block';
    } else {
      totalImage.style.display = 'none';
    }
  }


  const resetAllBtn = document.getElementById("resetAllBtn");

resetAllBtn.addEventListener("click", () => {
  // Reset values
  countPerry = 0;
  countGeva = 0;

  // Save to localStorage
  localStorage.setItem("beerCountPerry", countPerry);
  localStorage.setItem("beerCountGeva", countGeva);

  // Update progress bars and counts
  updateProgress();
});

  // Initial render
  updateProgress();
});


