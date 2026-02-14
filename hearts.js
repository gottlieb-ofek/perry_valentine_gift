const heartsContainer = document.getElementById("hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("falling-heart");
  heart.textContent = "❤️"; // heart emoji
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = 14 + Math.random() * 24 + "px";
  heart.style.animationDuration = 6 + Math.random() * 5 + "s";

  heartsContainer.appendChild(heart);

  // Remove heart after it falls
  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// Create a new heart every 0.3 seconds
setInterval(createHeart, 300);
