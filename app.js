/*-------------------------------- Constants --------------------------------*/
const playerX = [false,false ,false , false ,false , false, false, false,false]
const playerO = [false,false ,false , false ,false , false, false, false,false]
const winningCombos = [
  [0, 1, 2],  
  [3, 4, 5], 
   [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6]  
]


/*---------------------------- Variables (state) ----------------------------*/
let xTurn = true
let roundNumber = 0
let arrayIndex = 0

let oWon = false
let xWon = false
/*------------------------ Cached Element References ------------------------*/
const boardSqrEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')
const resetEl = document.querySelector('#reset')


/*-------------------------------- Functions --------------------------------*/
const handleReset = () =>
{
    console.log('reset');

    playerX.splice(0, 9,false,false ,false , false ,false , false, false, false,false)
    playerO.splice(0, 9,false,false ,false , false ,false , false, false, false,false)
    console.log(playerO);
    console.log(playerX);
    xTurn = true
    roundNumber = 0
    arrayIndex = 0

    oWon = false
    xWon = false

    boardSqrEls.forEach((element, index) => {
        boardSqrEls[index].textContent = ''
    });


    handleTurnMessage()


}


let whoWon = (id , player) => {

roundNumber += 1
player[id] = true
console.log(roundNumber);
if (roundNumber === 9) {
    messageEl.textContent = `It is a Tie`
}



        if (roundNumber > 4) {
    
    xWon = winningCombos.some(combo => combo.every(index => playerX[index]));
    
    
    oWon = winningCombos.some(combo => combo.every(index => playerO[index]));

    if (xWon) {
        console.log("Player X wins!");
        return
    } else if (oWon) {
        console.log("Player O wins!");
        return
        
    }
}

}

function handleTurnMessage() {
    messageEl.textContent = `It's now 'X' turn`
}

handleTurnMessage()

boardSqrEls.forEach((element, index) => {
    element.addEventListener('click', ()=>{
        if (boardSqrEls[index].textContent !== '') return;
        if (roundNumber === 9) return;
            
        
        
     
        

       console.log(roundNumber); 
        if (xTurn) {
            messageEl.textContent = `It's now 'O' turn`

            boardSqrEls[index].textContent = 'X'
            arrayIndex = whoWon(boardSqrEls[index].id, playerX);

            
            xTurn = false
        }
        else
        {
            boardSqrEls[index].textContent = 'O'
            arrayIndex = whoWon(boardSqrEls[index].id, playerO);

             messageEl.textContent = `It's now 'X' turn`


    
            xTurn = true
        }
        if (xWon) {
             messageEl.textContent = `Player X Have Won The Game!!!`
            
            return
        }

        if (oWon){
             messageEl.textContent = `Player O Have Won The Game!!!`
            return;
        } 


    })
   
    
})





   


/*----------------------------- Event Listeners -----------------------------*/
resetEl.addEventListener('click', handleReset)