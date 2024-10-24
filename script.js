



let UserLScore = parseInt(localStorage.getItem("UserScore")) || 0;
console.log(UserLScore);
let ComputerLScore = parseInt(localStorage.getItem("ComputerScore")) || 0;

let UserScoreE = document.getElementById('user-score');
console.log(UserScoreE);

// let uScore = parseInt(UserScoreE.textContent);
let ComputerScoreE = document.getElementById('computer-score');

UserScoreE.textContent  = UserLScore;

console.log(UserScoreE);
ComputerScoreE.textContent  = ComputerLScore;

let btn = document.querySelector('.rules-btn');
console.log(btn);

let nextButton = document.getElementById('nextBtn');
let rulesDescription = document.querySelector('.rules-section');
console.log(rulesDescription);

let closeDescription = document.getElementById('closeRulesDescription');

let rock = document.querySelector('.rock');
console.log(rock);

let scissors = document.querySelector('.scissors');
console.log(scissors);

let paper = document.querySelector('.paper');
console.log(paper);

let bg = document.querySelectorAll('.circle-wh');
console.log("all",bg);

let choosediv = document.querySelector('.choosediv');

console.log(choosediv);

let resultDiv = document.querySelector('.WinnerDiv');

console.log(resultDiv);

let resultMessages = document.querySelector('.resultMessages');

let rulesvisibility = function (){
console.log("inside function");
rulesDescription.classList.remove('rulesVisibility');
    
}

let closevisibility = function(){
    rulesDescription.classList.add('rulesVisibility');
}

btn.addEventListener('click', rulesvisibility);

nextButton.addEventListener('click', ()=>{
    window.location.href = 'final.html';
})

closeDescription.addEventListener('click', closevisibility);

rock.addEventListener('click', findwinner);

scissors.addEventListener('click',findwinner);

paper.addEventListener('click',findwinner);

let playagain = document.querySelector('.btn-againPlay');

playagain.addEventListener('click', () => {
    resultDiv.classList.add('hidden');
    choosediv.classList.remove('hidden');

})


async function findwinner(e){
    console.log("event:",e.target.id);
    choosediv.classList.add('hidden');
    resultDiv.classList.remove('hidden');
    let img = document.querySelector('#pickedImg img');

    // img.setAttribute('src','./Images/rock.png')   Another Method to set img


    // img.src = './Images/rock.png';

    img.src = `./Images/${e.target.id}.png`;
    let UserValue = e.target.id;
  let  ComputerValue = await getComputerValue();


  console.log(UserValue," ---- ", ComputerValue);
 let winner = checkWinner(UserValue, ComputerValue);
 console.log("winner is here",winner);

 showResult(winner);
}


let getComputerValue = async () => {
    return new Promise((resolve) => {
        let values = ["rock", "paper", "scissors"];
        let color = ["#0074B6", "#FFA943", "#BD00FF"];
        let computerValue;
        const interval = setInterval(() => {
          const getNumber = Math.floor(Math.random() * 3);
          computerValue = values[getNumber];
          computerPicked
            .querySelector("img")
            .setAttribute("src", `./Images/${values[getNumber]}.png`);
          computerPicked.style.borderColor = color[getNumber];
        }, 100);

        console.log(computerPicked);
        setTimeout(() => {
          clearInterval(interval);
          resolve(computerValue);
        }, 2000);
      }
      
      );
    

}

let checkWinner = (UserValue, ComputerValue) => {
    // let Winner = "";
        if (UserValue === ComputerValue) {
            return "TIE";
        } else if (
            (UserValue === "rock" && ComputerValue === "scissors") ||
            (UserValue === "paper" && ComputerValue === "rock") ||
            (UserValue === "scissors" && ComputerValue === "paper")
        ) {
            return "WIN";
        } else {
            return "COMPUTER";
        }
    };

let showResult = (winner) =>{
    //  winner ='WIN';
    let winnerMessage = document.querySelector('.winner-messages');
    
    let againstmessage = document.querySelector('.againstmessage');
    let btntext = document.querySelector('.btn-againPlay');
    let nextbtn = document.getElementById('nextBtn');
    if(winner == 'WIN' ){
        
        winnerMessage.innerHTML ="YOU WIN";

       
        let Score = parseInt(localStorage.getItem("UserScore")) || 0;
        Score += 1;

        localStorage.setItem("UserScore", Score);

        UserScoreE.textContent  = Score;

        nextbtn.classList.remove('hidden');

    }
    else if( winner == 'COMPUTER'){
        winnerMessage.innerHTML ="YOU LOST";

        let Score = parseInt(localStorage.getItem("ComputerScore")) || 0;
        Score += 1;

        localStorage.setItem("ComputerScore", Score);

        ComputerScoreE.textContent  = Score;



        resultMessages.classList.remove('hidden');
    } else{
        // let winnerMessage = document.querySelector('.winner-messages');
        winnerMessage.innerHTML ="TIE UP";
        
        againstmessage.classList.add('hidden');
        
        btntext.innerHTML ='REPLAY';
    }
}
