const button = document.getElementById('click-button');
const counterDisplay = document.getElementById('click-counter');

const clickSound = new Audio("sounds/click.mp3");

let clickCount = 0;

button.addEventListener('click', () => {
    clickCount++;
    counterDisplay.textContent = `Clicks: ${clickCount}`;
    clickSound.play();
})