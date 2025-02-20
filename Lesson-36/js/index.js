const box = document.getElementById('box');

let position = 0;

const moveBox = (value) => {
    position += value;
    box.style.transform = `translateX(${position}px)`;
}

document.addEventListener('keydown', event => {
    switch (event.key) {
        case 'ArrowRight':
            moveBox(10);
            break;
        case 'ArrowLeft':
            moveBox(-10);
            break;
        case 'y':
            box.style.backgroundColor = 'yellow';
            break;
        case 'g':
            box.style.backgroundColor = 'green';
            break;
        default:
            break;
    }
});

const output = document.getElementById('key');
const keys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
let currentKey = null;
let keydownListener = null;

function startNewGame() {
    currentKey = Math.floor(Math.random() * keys.length);
    output.textContent = keys[currentKey];

    if (keydownListener) {
        document.removeEventListener('keydown', keydownListener);
    }

    keydownListener = event => {
        if (event.key === keys[currentKey]) {
            startNewGame();
        } else {
            output.textContent = 'Game Over!';
            document.removeEventListener('keydown', keydownListener);
            keydownListener = null;
        }
    };

    document.addEventListener('keydown', keydownListener);
}

document.getElementById("startGame").addEventListener("click", startNewGame);

//

const block = document.getElementById('block');

let isMove = false;
let offsetX = 0;
let offsetY = 0;

let positionX = 0;
let positionY = 0;

document.addEventListener('mousedown', event => {
    isMove = true;
    block.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;

});

document.addEventListener('mouseup', () => {
    isMove = false;
    console.log(isMove);
});

document.addEventListener('mousemove', event => {
    if (isMove) {
        positionX = event.clientX;
        positionY = event.clientY;

        block.style.transform = `translate(${positionX}px, ${positionY}px)`;

    }
});
