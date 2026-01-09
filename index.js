const button = document.getElementById('click-button');
const counterDisplay = document.getElementById('click-counter');

const clickSound = new Audio("sounds/nya.mp3");

let clickCount = 0;

button.addEventListener('click', () => {
    clickCount++;
    counterDisplay.textContent = `Clicks: ${clickCount}`;
    try {
        clickSound.currentTime = 0;
        clickSound.play();
    } 
    catch (e) {
        alert("Error playing sound: " + e.message);
    }
    
});