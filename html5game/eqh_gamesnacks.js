// Global variables to manage game state
var audioEnabled = false;
var infiniteMoney = false;
var infiniteCoins = false;

// Placeholder for money and coins (replace with actual game variables)
var currentMoney = 1000; // Example initial value
var currentCoins = 100; // Example initial value

// Function to send score (you can replace this with your actual logic)
function js_GS_sendScore(score) {
    GAMESNACKS.sendScore(score);
    console.log("GAMESNACKS : score sent " + score.toString());
}

// Function to handle game over event
function js_GS_gameOver() {
    GAMESNACKS.gameOver();
    console.log("GAMESNACKS : game over");
}

// Function to check if audio is enabled
function js_GS_isAudioEnabled() {
    return audioEnabled;
}

// Function to check if it's Internet Explorer
function js_isIE() {
    var ua = window.navigator.userAgent;
    var isIE = /MSIE|Trident/.test(ua);
    return isIE;
}

// Function to check if it's a mobile or tablet device
function js_isMobileOrTablet() {
    var check = false;
    (function(a){
        if(/(android|bb\d+|meego).+mobile/.test(a)) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    var touchDevice = (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement);
    var supportOrientChange = (typeof window.orientation !== 'undefined');
    if (!check) {
        return (touchDevice || supportOrientChange);
    }
    return check;
}

// Mod Menu Logic
function toggleAudio() {
    audioEnabled = !audioEnabled;
    console.log('Audio Enabled: ' + audioEnabled);
}

function showScore() {
    alert('Toggling Score Display (implement this functionality)');
}

function triggerGameOver() {
    js_GS_gameOver();
}

function toggleInfiniteMoney() {
    infiniteMoney = !infiniteMoney;
    if (infiniteMoney) {
        currentMoney = 9999999; // Give infinite money (you can adjust this to your needs)
        console.log("Infinite Money Activated");
    } else {
        currentMoney = 1000; // Reset to the initial value or handle it as you like
        console.log("Infinite Money Deactivated");
    }
}

function toggleInfiniteCoins() {
    infiniteCoins = !infiniteCoins;
    if (infiniteCoins) {
        currentCoins = 9999999; // Give infinite coins (adjust as needed)
        console.log("Infinite Coins Activated");
    } else {
        currentCoins = 100; // Reset to the initial value or handle it as you like
        console.log("Infinite Coins Deactivated");
    }
}

// Create Mod Menu UI (HTML)
function createModMenu() {
    var modMenu = document.createElement('div');
    modMenu.style.position = 'fixed';
    modMenu.style.top = '10px';
    modMenu.style.left = '10px';
    modMenu.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modMenu.style.color = 'white';
    modMenu.style.padding = '10px';
    modMenu.style.borderRadius = '10px';
    modMenu.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    modMenu.style.zIndex = '9999';
    
    // Toggle Audio Button
    var audioButton = document.createElement('button');
    audioButton.innerText = 'Toggle Audio';
    audioButton.style.backgroundColor = '#1e90ff';
    audioButton.style.border = 'none';
    audioButton.style.color = 'white';
    audioButton.style.padding = '10px';
    audioButton.style.margin = '5px';
    audioButton.style.borderRadius = '5px';
    audioButton.style.cursor = 'pointer';
    audioButton.addEventListener('click', toggleAudio);
    
    // Toggle Score Button
    var scoreButton = document.createElement('button');
    scoreButton.innerText = 'Toggle Score';
    scoreButton.style.backgroundColor = '#1e90ff';
    scoreButton.style.border = 'none';
    scoreButton.style.color = 'white';
    scoreButton.style.padding = '10px';
    scoreButton.style.margin = '5px';
    scoreButton.style.borderRadius = '5px';
    scoreButton.style.cursor = 'pointer';
    scoreButton.addEventListener('click', showScore);
    
    // Game Over Button
    var gameOverButton = document.createElement('button');
    gameOverButton.innerText = 'Game Over';
    gameOverButton.style.backgroundColor = '#ff6347';
    gameOverButton.style.border = 'none';
    gameOverButton.style.color = 'white';
    gameOverButton.style.padding = '10px';
    gameOverButton.style.margin = '5px';
    gameOverButton.style.borderRadius = '5px';
    gameOverButton.style.cursor = 'pointer';
    gameOverButton.addEventListener('click', triggerGameOver);

    // Infinite Money Button
    var infiniteMoneyButton = document.createElement('button');
    infiniteMoneyButton.innerText = 'Toggle Infinite Money';
    infiniteMoneyButton.style.backgroundColor = '#32cd32';
    infiniteMoneyButton.style.border = 'none';
    infiniteMoneyButton.style.color = 'white';
    infiniteMoneyButton.style.padding = '10px';
    infiniteMoneyButton.style.margin = '5px';
    infiniteMoneyButton.style.borderRadius = '5px';
    infiniteMoneyButton.style.cursor = 'pointer';
    infiniteMoneyButton.addEventListener('click', toggleInfiniteMoney);
    
    // Infinite Coins Button
    var infiniteCoinsButton = document.createElement('button');
    infiniteCoinsButton.innerText = 'Toggle Infinite Coins';
    infiniteCoinsButton.style.backgroundColor = '#32cd32';
    infiniteCoinsButton.style.border = 'none';
    infiniteCoinsButton.style.color = 'white';
    infiniteCoinsButton.style.padding = '10px';
    infiniteCoinsButton.style.margin = '5px';
    infiniteCoinsButton.style.borderRadius = '5px';
    infiniteCoinsButton.style.cursor = 'pointer';
    infiniteCoinsButton.addEventListener('click', toggleInfiniteCoins);
    
    // Append buttons to mod menu
    modMenu.appendChild(audioButton);
    modMenu.appendChild(scoreButton);
    modMenu.appendChild(gameOverButton);
    modMenu.appendChild(infiniteMoneyButton);
    modMenu.appendChild(infiniteCoinsButton);
    
    // Append mod menu to body
    document.body.appendChild(modMenu);
}

// Initialize the mod menu when the script runs
createModMenu();
