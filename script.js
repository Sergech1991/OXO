'use strict'


let currentPlayer = 'O';
let won = false;


function place(box) {

    if (box.innerText !== "" || won) return;

    box.innerText = currentPlayer;

    currentPlayer === 'O' ? currentPlayer = 'X' : currentPlayer = 'O';


    checkGameBoard();
}


//Проверяем заполнен ли Х-О первый ряд игрового поля
function checkGameBoard() {

    //проверяем 3 одинаковых элемента в столбцах и рядах
    for (let i = 0; i <= 2; i++) {

        checkWinner(document.getElementById('0_' + i).innerText,
                    document.getElementById('1_' + i).innerText,
                    document.getElementById('2_' + i).innerText);

        checkWinner(document.getElementById(i + '_0').innerText,
                    document.getElementById(i + '_1').innerText,
                    document.getElementById(i + '_2').innerText);
    }

    //проверяем 3 одинаковых элемента в диагоналях
    checkWinner(document.getElementById('0_0').innerText,
                document.getElementById('1_1').innerText,
                document.getElementById('2_2').innerText);

    checkWinner(document.getElementById('0_2').innerText,
                document.getElementById('1_1').innerText,
                document.getElementById('2_0').innerText);

}


//Функция проверки победителя
function checkWinner(first, second, third) {
    if(first !=="" && first === second && first === third) {
        alert('You are winner!');
        won = true;
    }
}



