const startBtn = document.querySelector("#start-btn");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector(".time-list");
let timeForGame = 0;
let score = 0;
let intervalId;
const backgrounds = ['linear-gradient(90deg, #16d9e3 0%, #30c7ec 47%, #46aef7 100%)', 'linear-gradient(229.99deg, #3ce900 50%, #488019 145%)', " linear-gradient(215.32deg, #7b0408 -1%, #f30000 124%)", "linear-gradient(221.87deg, #013ac9 10%, #dcbcec 190%)", 'linear-gradient(220.16deg, #fffd8c -8%, #b91a04 138%)']
const board = document.querySelector("#board");
let timeEl = document.querySelector("#time");
startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  screens[0].classList.add("up");
});
timeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("time-btn")) {
    timeForGame = parseInt(event.target.getAttribute("data-time"));
    console.log(timeForGame)
    screens[1].classList.add("up");
    startGame();
  }
});
function startGame() {
  clearInterval(intervalId);
 intervalId = setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(timeForGame);
}

function decreaseTime() {
  if (timeForGame === 0) {
    finishGame();
  } else {
    let current = --timeForGame;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
}
function setTime(time) {
  timeEl.innerHTML = `00:${time}`;
}

function finishGame() {
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Счет: <span class = "primary">${score}</span></h1>`;
}

function createRandomCircle() {
  const circle = document.createElement("div");
  const size = getRandomNumber(10, 30);
  const {width, height} = board.getBoundingClientRect();
  const x = getRandomNumber (size, width - size);
  const y =getRandomNumber(size, height - size);

    index = getRandomNumber(0, backgrounds.length) 
  circle.classList.add("circle");
  circle.style.background = backgrounds[index]
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`

  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


board.addEventListener('click', (event) => {
    if(event.target.classList.contains('circle')){
        console.log('sheeesh')
        score++;
        event.target.remove();
        createRandomCircle();
    }
})


function resetGame() {

  clearInterval(intervalId);

  screens.forEach((screen) => {
    screen.classList.remove("up");
  });


  board.innerHTML = "";

  score = 0;

  timeForGame = 0;
  timeEl.parentNode.classList.remove("hide");
  setTime("00:00");
}

const resetButton = document.querySelector(".reset-btn");
resetButton.addEventListener("click", () => {
  resetGame();
});