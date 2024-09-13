let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset-btn');
let newgamebtn = document.querySelector('#newgame-btn');
let msgcontainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turn0 = true; //player x, player o

// 2d array to keep track of the board
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6], 
    [0, 4, 8],  
    [1, 4, 7],
    [2, 5, 8], 
    [2, 4, 6],
    [3, 4, 5], 
    [6, 7, 8], 
];

const resetGame = () => {
    turn0 = true;
    EnableBoxes();
    msgcontainer.style.display = 'none';
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        // box.innerHTML = 'X';
        if (turn0) {
            box.innerHTML = '0';
            turn0 = false;
        } else {
            box.innerHTML = 'X';
            turn0 = true;
        }

        box.disabled = true;

        checkWinner();
    });
});

var pattern = winpatterns;

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    };
};

const EnableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = '';
    };
};

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations ${winner}! You won!`;
    msgcontainer.style.display = 'block';
    disableBoxes();
}

const checkWinner = () => {
    for( let pattern of winpatterns) {
        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;

        if (pos1value != '' && pos2value != '' && pos3value != '') {
            if (pos1value === pos2value && pos2value === pos3value) {
                showWinner(pos1value);         
        }

};
  
}};


newgamebtn.addEventListener('click', resetGame);
resetbtn.addEventListener('click', resetGame);