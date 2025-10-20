const startBtn = document.querySelector("#startBtn");
const checkBtn = document.querySelector("#checkBtn");
const main = document.querySelector("#main");
const startContainer = document.querySelector("#startContainer");
const numberCard = document.querySelector("#numberCard");
const input = document.querySelector("input");
const guesses = document.querySelector("#guesses");

const num = randomNum();
let count = 10;

startBtn.onclick = function () {
  main.style.display = "flex";
  startContainer.style.display = "none";

  numberCard.textContent = "?";
  console.log(num);
  console.log(num, typeof num);
  return num;
};

function randomNum() {
  const min = 1;
  const max = 100;

  const randomNumber = Math.floor(Math.random() * max) + min;

  return randomNumber;
}

checkBtn.onclick = function (e) {
    e.preventDefault()
  if (input.value !== '') {
     count--;
  console.log(`You have only ${count} tries left`, typeof count);

  if (count === 10) {
    input.disabled = true;
    input.value = '';
    checkBtn.textContent = 'Game Over!';
    document.querySelector('#label').textContent = 'You Lose!';
  }
  } 
  const inputValue = document.querySelector("input").value;

  convertNum = Number(inputValue);

  if (inputValue === '' ) {
    input.placeholder = 'Enter number';
    input.style.border = '1px solid red'
    return;
  } else if (convertNum < num){
    console.log('your guess is too low')
  } else if (convertNum > num){
    console.log('your guess is too high')
  } else if (convertNum !== num){
    input.style.border = '1px solid red'
    console.log(convertNum, typeof convertNum);
    console.log("wrong");
    guesses.style.display = "flex";
    textguess = document.createElement("p");

    textguess.textContent = convertNum;

    textguess.style.marginRight = "5px";

    guesses.appendChild(textguess);

    document.querySelector('#triesLeft').style.display = 'flex'
    document.querySelector('#triesLeft').textContent = `You only have ${count} tries left!`;
  } else {
    document.querySelector('#label').textContent = 'You Win!';
    document.querySelector('#triesLeft').style.display = 'none'
    input.style.display = 'none';
    numberCard.textContent = num;
    console.log("correct");
    input.disabled = true;
    input.value = "";
  }
};
