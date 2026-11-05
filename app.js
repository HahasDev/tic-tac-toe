/*-------------------------------- Constants --------------------------------*/
const ticTacToe = [[0, 1, 2], [3 , 4, 5], [6 , 7, 8]]
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
let totalColumn = 0
let totalRow = 0
let column = 0
let row = 0
let roundNumber = 0
let totalIndex = 0
let arrayIndex = 0

let oWon = false
let xWon = false
/*------------------------ Cached Element References ------------------------*/
const boardSqrEls = document.querySelectorAll('.sqr')



/*-------------------------------- Functions --------------------------------*/

// let indexToArray = (id , player) => {
// for ( let index = 0; index < id; index++) {
// column++ 
    
//     if (column === 3 )
//     {
//         row++
//         column = 0
//     }

// }
//         player[row][column] = true
//         if (player[row][column] === true ) {
//             console.log(player[row][column]);
            
//         }
//         const result = player.filter((place) => place === true);
//         console.log(result);
//         CheckResults(player)
//         row = 0
//         column = 0
//         console.log(player);



// }


let whoWon = (id , player) => {

roundNumber += 1
player[id] = true

console.log(roundNumber);

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


boardSqrEls.forEach((element, index) => {
    element.addEventListener('click', ()=>{
        if (boardSqrEls[index].textContent !== '') return;

        
        if (xTurn) {
            boardSqrEls[index].textContent = 'X'
            arrayIndex = whoWon(boardSqrEls[index].id, playerX);

            
            xTurn = false
        }
        else
        {
            boardSqrEls[index].textContent = 'O'
            arrayIndex = whoWon(boardSqrEls[index].id, playerO);

    
            xTurn = true
        }


    })
   
    
})


let CheckResults = (player) => {

    player.forEach((element,index)=> {
        if (element[index] === true) {
            console.log(element[index].index);

            totalIndex += element[index].id
            console.log(totalIndex);
        }
        
    });


    for (let index = 0; index < ticTacToe.length; index++) {

        for (let id = 0; id < ticTacToe.length; id++) {

            

            //  totalColumn =+ ticTacToe[row][column];
            // console.log(totalColumn);
            // totalColumn =+ ticTacToe[row][column]
            
        }
        
    }
}

/*----------------------------- Event Listeners -----------------------------*/
