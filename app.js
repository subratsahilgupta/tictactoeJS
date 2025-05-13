let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn")
let newGameBtn = document.querySelector("#newGameBtn")

let turnX= true; //playerX, playerO
let playerTurn = document.getElementById("playerTurn");
playerTurn.innerText = "Turn of First Player!"

let count = 0;


const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8] 
];


boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        // console.log("box was clicked!");
        count++;
        if (turnX){
            box.innerText = "X";
            turnX = false;
            playerTurn.innerText = "Turn of Second Player!"
        }
        else{
            box.innerText = "O";
            turnX = true;
            playerTurn.innerText = "Turn of First Player!"
        }
        box.disabled = true;

        if (count == 9){
            gameTie();
        }

        checkWinner();
    });
});

// const checkWinner = () =>{
//     let msg = document.getElementById("msg");

//     for (pattern of winPatterns){
//         // console.log(
//         //     boxes[pattern[0]], 
//         //     boxes[pattern[1]], 
//         //     boxes[pattern[2]]
//         // )
//         let pos1Val = boxes[pattern[0]].innerText;
//         let pos2Val = boxes[pattern[1]].innerText;
//         let pos3Val = boxes[pattern[2]].innerText;
//         if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
//             if (pos1Val === pos2Val && pos2Val === pos3Val) {
//                 // if (turnX){
//                 //     // console.log("Player Second WINS")
//                 //     playerTurn.innerText = ""
//                 //     msg.innerText = "Player Second WINS!"
//                 //     }
//                 //     else{
//                 //     // console.log("Player First WINS")
//                 //     playerTurn.innerText = ""
//                 //     msg.innerText = "Player First WINS!"
//                 //     }
//                 gameWon(pos1Val);
                
//             }     
//         }

//     }
// }


const checkWinner = () => {
    let winnerFound = false;

    for (pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                gameWon(pos1Val);
                winnerFound = true;
                return; // Stop further checking
            }
        }
    }

    if (!winnerFound && count === 9) {
        gameTie();
    }
};



const freezeGame = ()=>{
    for (box of boxes){
        box.disabled = true;
    }
}

const defreezeGame = ()=>{
    for (box of boxes){
        box.disabled = false;
        box.innerText= ""
    }
}

const gameWon = (who) =>{
    playerTurn.innerText = ""
    msg.innerText = `Congratulations ${who}  WINS!`
    msg.classList.remove("hide");
    newGameBtn.classList.remove("hide");
    freezeGame();
}

const gameTie = () =>{
    count = 0;
    playerTurn.innerText = ""
    msg.innerText = `Game Tie!!!`
    msg.classList.remove("hide");
    newGameBtn.classList.remove("hide");
    freezeGame();

}

const resetGame = () =>{
    turnX= true;
    count = 0;
    defreezeGame();
    msg.classList.add("hide");
    newGameBtn.classList.add("hide");
    playerTurn.innerText = "Turn of First Player!"
}


const newGame = () =>{
    turnX= true;
    count = 0;
    defreezeGame(); 
    msg.classList.add("hide");
    newGameBtn.classList.add("hide");
    playerTurn.innerText = "Turn of First Player!"

}



resetBtn.addEventListener("click", resetGame)
newGameBtn.addEventListener("click", newGame)