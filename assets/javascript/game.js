const words = ['espresso', 'americano', 'frappe', 'cappuccino', 'latte', 'macchiato', 'mocha', 'frappuccino', 'columbian', 'arabica'];
const rand = Math.floor(Math.random() * words.length);
const wordChoice = words[rand];
const letterArray = wordChoice.split('');
const startScreen = document.getElementById('startScreen');
const gameScreen = document.getElementById('gameScreen');
const guessScreen = document.getElementById('guessScreen');
const wordDisplay = document.getElementById('wordDisplay');

const gameObj = {
    startDisp() {
        startScreen.style.display = 'none';
        gameScreen.style.display = 'block';
        guessScreen.style.display = 'block';
        for (let i = 0; i < letterArray.length; i++) {
            wordDisplay.textContent += '_';
        }
    },
    letterHit(event) {
        let key = event.key;
        let str = wordDisplay.textContent;
        let undArray = str.split('');
        let pos = wordChoice.indexOf(key);

        while (pos !== -1) {
          console.log(key);
          console.log(pos);
          undArray[pos] = wordChoice[pos].toUpperCase();
          console.log(undArray);
          pos = wordChoice.indexOf(key, pos + 1);
        }
        
        
    },
    letterMiss() {

    }
}

document.onkeyup = (event) => {
    if (event.key === 'Enter') {
        gameObj.startDisp();
        console.log(wordChoice);
    } else if (event.key !== 'Enter') {
        gameObj.letterHit(event);
    }
}