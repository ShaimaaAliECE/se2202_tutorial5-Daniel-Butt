let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is
document.getElementById('next-lbl').innerText = nextPlayer;


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    let gameboard = document.getElementById('gameboard').firstElementChild;

    let rows = gameboard.children;

    for(row of rows){
        for(column of row.children){
            column.innerHTML = `<button class='button'>[ ]</button>`;
        }
    }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    btn = event.target;
    btn.innerText = '[' + nextPlayer + ']'
    btn.disabled = true;

    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
        let btns = document.querySelectorAll('button');
        let winner = 'n/a';

        for(let i = 0; i < 9; i+= 3){
            if(btns[i].innerText == btns[i+1].innerText && btns[i+1].innerText == btns[i+2].innerText){
                console.log(btns[i].innerText + '1')
                if(btns[i].innerText == "[X]"){
                    winner = 'X';
                }
                else{
                    winner = 'O';
                }
            }
        }
        for(let i = 0; i < 3; i++){
            if(btns[i].innerText == btns[i+3].innerText && btns[i+3].innerText == btns[i+6].innerText){
                console.log(btns[i].innerText + '2')
                if(btns[i].innerText == "[X]"){
                    winner = 'X';
                }
                else{
                    winner = 'O';
                }
            }
        }

        if((btns[0].innerText == btns[4].innerText && btns[4].innerText == btns[8].innerText)){
            console.log(btns[0].innerText + '3')
            if(btns[0].innerText == "[X]"){
                winner = 'X';
            }
            else{
                winner = 'O';
            }
        }
        else if((btns[2].innerText == btns[4].innerText && btns[4].innerText == btns[6].innerText)){
            console.log(btns[3].innerText)
            if(btns[3].innerText == "[X]" + '4'){
                winner = 'X';
            }
            else{
                winner = 'O';
            }
        }

        document.getElementById('game-over-lbl').innerText = 'Game Over ' + winner + ' wins!';
    }
    else{
        if(nextPlayer === 'X'){
            nextPlayer = 'O';
        }
        else{
            nextPlayer = 'X';
        }
        document.getElementById('next-lbl').innerText = nextPlayer;
    }
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    let btns = document.querySelectorAll('button');
    for (let i=0; i<btns.length; i++)
    {
        if(!btns[i].disabled){
            return false;
        }
            
    }
    return true;
}
