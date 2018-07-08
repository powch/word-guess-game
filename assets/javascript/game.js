const words = ['espresso', 'americano', 'frappe', 'cappuccino', 'latte', 'macchiato', 'mocha', 'frappuccino', 'columbian', 'arabica'];

const gameObj = {
    startDisp() {
        let startScreen = document.getElementById('startScreen');
        let gameScreen = document.getElementById('gameScreen');
        let guessScreen = document.getElementById('guessScreen');
        startScreen.style.display = 'none';
        gameScreen.style.display = 'block';
        guessScreen.style.display = 'block';
    }
}

document.onkeyup = (event) => {
    let key = event.key;
    if (key === 'Enter') {
        gameObj.startDisp();
    }
}