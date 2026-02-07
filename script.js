// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn"); // Simplified selector

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Track scale for Yes button
let yesScale = 1;

// Click Envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// Logic to move the NO btn and grow the YES btn
noBtn.addEventListener("mouseover", () => {
    // 1. Move the No Button
    // We increase the 'scatter' range slightly but keep it manageable
    const min = 80; 
    const max = 150;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    // We use 'translate' which moves it relative to its STARTING position
    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;

    // 2. Grow the Yes Button SLOWLY
    // Changed from 0.15 to 0.05 for a very gentle growth
    yesScale += 0.05; 
    yesBtn.style.transition = "transform 0.3s ease-out";
    yesBtn.style.transform = `scale(${yesScale})`;
});

// YES is clicked
yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";
    catImg.src = "cat_dance.gif";
    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display = "none";
    finalText.style.display = "block";
});