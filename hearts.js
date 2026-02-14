const heartsContainer = document.getElementById("hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("falling-heart");

  // Random horizontal position
  heart.style.left = Math.random() * window.innerWidth + "px";

  // Random size (makes hearts small or bigger)
  const size = 12 + Math.random() * 24;
  heart.style.width = size + "px";
  heart.style.height = size + "px";

  // Random fall speed
  heart.style.animationDuration = 6 + Math.random() * 4 + "s";

  heartsContainer.appendChild(heart);

  // Remove heart after falling
  setTimeout(() => heart.remove(), 10000);
}

// Create a new heart every 0.3 seconds
setInterval(createHeart, 300);
