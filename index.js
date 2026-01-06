const button = document.getElementById('click-button');
const counterDisplay = document.getElementById('click-counter');

let clickCount = 0;

button.addEventListener('click', () => {
    clickCount++;
    counterDisplay.textContent = `Clicks: ${clickCount}`;
})