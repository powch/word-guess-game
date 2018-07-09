const words = ['espresso', 'americano', 'frappe', 'cappuccino', 'latte', 'macchiato', 'mocha', 'frappuccino', 'columbian', 'arabica'];
const rand = Math.floor(Math.random() * words.length);
const wordChoice = words[rand];
const letterArray = wordChoice.split('');
const startScreen = document.getElementById('startScreen');
const gameScreen = document.getElementById('gameScreen');
const guessScreen = document.getElementById('guessScreen');
const wordDisplay = document.getElementById('wordDisplay');
const missedLetters = document.getElementById('missedLetters');
const guessRemain = document.getElementById('guessRemain');
const winDisplay = document.getElementById('winDisplay');
const loseScreen = document.getElementById('loseScreen');
const wins = 0;
const remain = 10;
const badArray = ['Backspace', 'CapsLock', ' ', 'Tab', 'Control', 'Alt', 'Shift', 'Insert', 'Delete', 'End', 'Home', 'PageUp', 'PageDown', 'Pause', 'PrintScreen', 'Meta', ',', '.', '/', ';', '[', ']', "'", '\\', '-', '=', '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const gameObj = {
    startDisp() {
        startScreen.style.display = 'none';
        gameScreen.style.display = 'block';
        guessScreen.style.display = 'block';
        guessRemain.textContent = remain;
        winDisplay.textContent = wins;
        for (let i = 0; i < letterArray.length; i++) {
            wordDisplay.textContent += '_';
        }
    },
    loseDisplay() {
        gameScreen.style.display = 'none';
        guessScreen.style.display = 'none';
        loseScreen.style.display = 'block';
    },
    letterHit(event) {
        let key = event.key;
        let str = wordDisplay.textContent;
        let undArray = str.split('');
        let pos = wordChoice.indexOf(key);

        if (pos === -1) {
            return key.toUpperCase();
        } else {
            while (pos !== -1) {
                undArray[pos] = wordChoice[pos].toUpperCase();
                pos = wordChoice.indexOf(key, pos + 1);
            }
            return undArray.join('');
        }   
    },
    letterMiss(event) {
        let key = event.key;
        let str = missedLetters.textContent.toLowerCase();
        let pos = str.indexOf(key);

        if (pos === -1) {
            return key.toUpperCase();
        }
    },
    reset() {
        startScreen.style.display = 'none';
        loseScreen.style.display = 'none';
        gameScreen.style.display = 'block';
        guessScreen.style.display = 'block';
        guessRemain.textContent = remain;
        wordDisplay.textContent = '';
        missedLetters.textContent = '';
        for (let i = 0; i < letterArray.length; i++) {
            wordDisplay.textContent += '_';
        }
    }
}

document.onkeyup = (event) => {
    if (event.key === 'Enter') {
        gameObj.startDisp();
        console.log(wordChoice);
    } else if (event.key === 'Escape') {
        gameObj.reset();
    } else if (event.key !== 'Enter') {
        for (let i = 0; i < badArray.length; i++) {
            if (event.key === badArray[i]) {
                return;
            }
        }
        if (gameObj.letterHit(event).length > 1) {
            wordDisplay.textContent = gameObj.letterHit(event);
        } else if (gameObj.letterMiss(event) !== undefined) {
            missedLetters.textContent += gameObj.letterMiss(event);
            let num = guessRemain.textContent--;
            if (num === 1) {
                gameObj.loseDisplay();
            }
        }
    }
}