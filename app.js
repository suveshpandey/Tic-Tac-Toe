const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".reset-btn");
const winnerDiv = document.querySelector(".winner");
const gameContainer = document.querySelector(".container");
const newGameBtn = document.querySelector(".new-game");
const winnerName = document.querySelector(".winner span");

let turnO = true;   //player X and player O

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

alert("Note:- The game starts with O sign.")

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            box.style.color = "#98fb98" 
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "#b22222"; 
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});



const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;


        if(pos1Val != "" && pos2Val != "" & pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log("Winner is - ", pos1Val);
                winnerDiv.style.display = "block"; 
                gameContainer.style.display = "none"; 
                resetBtn.style.display = "none"; 
                showWinner(pos1Val);
            }
        }
    }
};

function showWinner(pos1Val){
    winnerName.innerText = pos1Val;
}

//new game
newGameBtn.addEventListener("click", () => {
    newGame();
});
resetBtn.addEventListener("click", () => {
    newGame();
});


function newGame(){
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });

    turnO = true;
    winnerDiv.style.display = "none";
    gameContainer.style.display = "block";
    resetBtn.style.display = "block"; 
}
