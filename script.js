let box = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let turn = true;
let count = 0;

let winner=[];
const displayWinner = (winner) => {
msg.innerText = `Winner is ${winner}`;
reset.innerText = `New Game`;
return;
};

const checkResult = () => {
    let arr=[];
    let i = 0;

   box.forEach((b)=> {
   arr[i]=b.innerText;
   i++;
   });

   if(arr[0]!=""&&arr[0]==arr[1]&&arr[0]==arr[2]){
    displayWinner(arr[0]);
   }else if(arr[0]!=""&&arr[0]==arr[3]&&arr[0]==arr[6]){
    displayWinner(arr[0]);
   }else if(arr[0]!=""&&arr[0]==arr[4]&&arr[0]==arr[8]){
    displayWinner(arr[0]);
   }else if(arr[1]!=""&&arr[1]==arr[4]&&arr[1]==arr[7]){
    displayWinner(arr[1]);
   }else if(arr[2]!=""&&arr[2]==arr[5]&&arr[2]==arr[8]){
    displayWinner(arr[2]);
   }else if(arr[3]!=""&&arr[3]==arr[4]&&arr[3]==arr[5]){
    displayWinner(arr[3]);
   }else if(arr[6]!=""&&arr[6]==arr[7]&&arr[6]==arr[8]){
    displayWinner(arr[6]);
   }else if(arr[2]!=""&&arr[2]==arr[4]&&arr[2]==arr[6]){
    displayWinner(arr[2]);
   }
};



const draw = () => {
    msg.innerText = `Draw`;
    reset.innerText = "New Game";
};

let game = box.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn){
            box.innerText = "O";
            turn = false;
            count++;
        }else{
            box.innerText = "X";
            turn =true;
            count++;
        }
        box.disabled = true;
        let isWinner = checkResult();
        if( count==9 && !isWinner ){
            draw();
        }
    });
});


let  anotherGame = reset.addEventListener("click", () => {
    box.forEach((box) => {
        count = 0;
        box.innerText = "";
        msg.innerText = "";
        box.disabled = false;
        reset.innerText = "Reset Game";
    });
});