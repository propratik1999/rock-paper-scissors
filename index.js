const computerChoice=document.getElementById('computerChoice');
const yourChoice=document.getElementById('yourChoice');
const newresult=document.getElementById('result');
const possibleChoice=document.querySelectorAll('button');
let userChoice
let compChoice
let result1

possibleChoice.forEach(possibleChoice=> possibleChoice.addEventListener('click',(e)=>{
userChoice=e.target.id;
yourChoice.innerHTML=userChoice;
generateComputerChoice();
goResult();
}))


function generateComputerChoice(){

    const randomNumber=Math.floor(Math.random()*3)+1;
    console.log(randomNumber);

    if(randomNumber===1)
    compChoice='rock';
    if(randomNumber===2)
    compChoice='paper';
    if(randomNumber===3)
    compChoice='scissors';

    computerChoice.innerHTML=compChoice;

}

    function goResult(){

        if(compChoice===userChoice)
        result1='its draw';
        else if(compChoice==='rock'&& userChoice==='paper')
        result1='you win';
        else if(compChoice==='rock'&& userChoice==='scissor')
        result1='you lose';
        else if(compChoice==='paper'&& userChoice==='rock')
        result1='you win';
        else if(compChoice==='paper'&& userChoice==='scissors')
        result1='you lose';
        else if(compChoice==='scissors'&& userChoice==='rock')
        result1='you win';
        else if(compChoice==='scissors'&& userChoice==='paper')
        result1='you lose';

        newresult.innerHTML=result1;

    }

    

