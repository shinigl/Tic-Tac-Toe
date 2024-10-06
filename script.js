let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");

let turnO = true ; 

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

 boxes.forEach((box) => {
    box.addEventListener("click", () => {
      //player O )
      if(turnO == true){
        box.innerText = "O"
        turnO = false ;
      } else{
        //player X
        box.innerText="X";
        turnO = true ;
      }
      box.disabled=true ;

      checkWinner(); //function called to check winner
    });
 });

 

 const checkWinner = () => {

       for(let pattern of winPatterns){
           
           //  checking 3 boxes to declare a winner
           let pos1 =boxes[pattern[0]].innerText ;
           let pos2 =boxes[pattern[1]].innerText ;
           let pos3 =boxes[pattern[2]].innerText ;


           if(pos1 != "" && pos2 != "" && pos3 !=""){
            if(pos1 === pos2 && pos2 === pos3  ){
                console.log("WINNER");
                showWinner(pos1); //calling function to show winner
            }
           }
       }
 }

 const showWinner = (winner) =>{
    msg.innerText =`Congratulations , the winner is ${winner}` ;
    msgContainer.classList.remove("hide");
    disableBoxes();
  
 } 

 const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true ;
    }
 }

 //reset game
 resetBtn.addEventListener("click" ,()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
 })

 const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false ;
        box.innerText= "";
    }
 }

 //newGame
 newGamebtn.addEventListener("click" , ()=>{
    turnO = true;
    count = 0 ;
    enableBoxes();
    msgContainer.classList.add("hide");
 });


