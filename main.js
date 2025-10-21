const startBtn = document.querySelector("#startBtn");
const checkBtn = document.querySelector("#checkBtn");
const main = document.querySelector("#main");
const startContainer = document.querySelector("#startContainer");
const numberCard = document.querySelector("#numberCard");
const input = document.querySelector("input");
const guesses = document.querySelector("#guesses");
const triesLeft = document.querySelector("#triesLeft");

const num = randomNum();
let numOfTries = 10;
let count = 0;

startBtn.onclick = function () {
  main.style.display = "flex";
  objective.style.display = "none";
  startContainer.style.display = "none";
  howToPlayBtn.style.display = "none";
  input.focus();
  document.querySelector('#randomNumber').textContent = "?";
  console.log(num);
  console.log(num, typeof num);
  return num;
};

document.querySelector('#exitBtn').onclick = function(){
  window.location.reload();
}

function randomNum() {
  const min = 1;
  const max = 100;

  const randomNumber = Math.floor(Math.random() * max) + min;

  return randomNumber;
}

checkBtn.onclick = function (e) {
  const inputValue = document.querySelector("input").value;

  convertNum = Number(inputValue);

    e.preventDefault()
    //checks of input vaue that receive
  if (inputValue !== '') {
     count++;
     numOfTries--;
  console.log("click",count , typeof count);
  console.log("tries:",numOfTries , typeof numOfTries);

  triesLeft.style.display ='flex';
  document.querySelector('#tries').textContent = `You only have ${numOfTries} tries left`;

    
  } 

  if(count === 5){
    document.querySelector('#highLow').style.display = 'none';
    document.querySelector('#hint').style.display = 'flex';

    if (num % 2 !== 0) {
      document.querySelector('#hint').textContent = 'The number is odd!'
    } else {
      document.querySelector('#hint').textContent = 'The number is even!'
    }
  } else if(count === 7){
    document.querySelector('#highLow').style.display = 'none';
    document.querySelector('#hint').style.display = 'flex';

    if (num % 5 !== 0) {
      document.querySelector('#hint').textContent = 'The number is not divisible by 5'
    } else {
      document.querySelector('#hint').textContent = 'The number is divisible by 5'
    }
  } else{
    document.querySelector('#highLow').style.display = 'flex';
    document.querySelector('#hint').style.display = 'none';
  }

  if (count === 10) {
    input.disabled = true;
    input.value = '';
    input.style.display = 'none';
    document.querySelector('#randomNumber').textContent = num;
    checkBtn.textContent = 'Game Over!';
    document.querySelector('#label').textContent = 'You Lose!';
  }

  

  if (inputValue === '' ) {
    input.placeholder = '? ';
    input.style.border = '1px solid red'
    return;
  } else if (convertNum !== num){   //checks of the guess number is correct
    input.style.border = '1px solid red'
    console.log(convertNum, typeof convertNum);
    console.log("wrong");
    guesses.style.display = "flex"; 
    input.focus();
    textguess = document.createElement("p");
    textguess.textContent = convertNum;
    textguess.style.marginRight = "5px";

    triesLeft.style.display ='flex';
    
      if (convertNum > num) {
        document.querySelector('#highLow').textContent = 'Your number is too high';
      } else {
        document.querySelector('#highLow').textContent = 'Your number is too low';
    }

    guesses.appendChild(textguess);
  } else {
    document.querySelector('#label').textContent = 'You Win! 🎉🎉🎉';
    guesses.style.display = "none";
  triesLeft.style.display = "none";
    input.style.display = 'none';
    document.querySelector('#randomNumber').textContent = num;
    checkBtn.textContent = 'Congratulations!';
    checkBtn.style.background = 'green';
    console.log("correct");
    input.disabled = true;
    input.value = "";
  }
};
