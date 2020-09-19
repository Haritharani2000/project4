const buttons =document.querySelectorAll('.pick');
const scoreEl=document.getElementById('score');
const main=document.getElementById('main');
const selection=document.getElementById('selection');




const choices=['paper', 'scissors', 'rock'];

let score=0;
let userChoice = undefined;

buttons.forEach(button => {
    button.addEventListener('click' , () => {
        userChoice = button.getAttribute('data-choice');

        
       checkWinner();
 });
});

function checkWinner() {
    const computerChoice = pickRandomChoice();

    

    if(userChoice === computerChoice){
        //draw
     }else if (userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'paper'){
        //user won
        updateScore(1);
    }else{
        //user lost
        updateScore(-1);
    }
    //show
    main.style.display = 'none';
    selection.style.display = 'flex';
    
        
}

function updateScore(value) {
    score += value;
    scoreEl.innerText=score;

}

function pickRandomChoice(){
    return choices[Math.floor(Math.random() * choices.length)];

}
