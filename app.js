const slides = document.querySelectorAll(".slide");
const projects = document.querySelector(".project-container");
const colors = ["#E88280", "#d6ad43", "#78a7b1", "#a9b8df", "#4f4b5d"];
const block = document.querySelector(".slide"); // Замените 'myBlock' на ID вашего блока
const width = block.offsetWidth; // Ширина блока
const height = block.offsetHeight; // Высота блока
const numberOfSquares = (height * width) / 16 / 16;
const board = document.querySelector("#board");
const aimerGame = document.querySelector(".aimerGame");
const slider = document.querySelector(".slider");
const startBtn = document.querySelector("#start-btn");
const guitarShop = document.querySelector(".guitarShop");
const doodle = document.querySelector(".doodle");
const lights = ["#E8A380", "#F456E9", "#848DDB", "#85F2DA", "#B4E880"];
createSlider();
for (const [index, slide] of slides.entries()) {
  slide.addEventListener("click", () => {
    clearActiveClasses();
    slide.classList.add("active");
    projects.style.backgroundColor = colors[index];
    if (index === 0) {
      createFlasher();
    } else {
      revomeFlasher();
    }
    if (index === 1) {
      createAimer();
    } else {
      removeAimer();
    }
    if (index === 2) {
      createSlider();
    } else {
      removeSilder();
    }
    if (index === 3) {
      createShop();
    } else {
      removeShop();
    }
    if (index === 4) {
      createDoodle();
    } else {
      removeDoodle();
    }
  });
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}

function createFlasher() {
  if (!board.firstChild) {
    for (let i = 0; i < numberOfSquares; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.addEventListener("mouseover", () => setColor(square));
      square.addEventListener("mouseleave", () => unSetColor(square));
      board.append(square);
    }
  }

  function setColor(element) {
    const colorIndex = Math.floor(Math.random() * lights.length);
    element.style.background = `${lights[colorIndex]}`;
    element.style.boxShadow = `0 0 2px ${lights[colorIndex]}`;
  }

  function unSetColor(element) {
    element.style.background = "#1d1d1d";
    element.style.boxShadow = `0 0 2px #1d1d1d`;
  }
}

function revomeFlasher() {
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
}

startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  // screens[0].classList.add("up");
});

function createAimer() {
  if (!aimerGame.firstChild) {
    const iframe = document.createElement("iframe");
    iframe.src = "aimtrainer/index.html";
    iframe.height = "100%";
    iframe.width = "100%";
    iframe.style.borderRadius = "20px";
    aimerGame.appendChild(iframe);
  }
}

function removeAimer() {
  while (aimerGame.firstChild) {
    aimerGame.removeChild(aimerGame.firstChild);
  }
}

function createSlider() {
  if (!slider.firstChild) {
    const iframeSlider = document.createElement("iframe");
    iframeSlider.src = "слайдер/index.html";
    iframeSlider.height = "100%";
    iframeSlider.width = "100%";
    iframeSlider.style.borderRadius = "20px";
    slider.append(iframeSlider);
  }
}
function removeSilder() {
  while (slider.firstChild) {
    slider.removeChild(slider.firstChild);
  }
}
function createShop() {
  if (!guitarShop.firstChild) {
    const shopFrame = document.createElement("iframe");
    shopFrame.src = "shop/index.html";
    shopFrame.height = "100%";
    shopFrame.width = "100%";
    shopFrame.style.borderRadius = "20px";
    guitarShop.appendChild(shopFrame);
  }
}
function removeShop() {
  while (guitarShop.firstChild) {
    guitarShop.removeChild(guitarShop.firstChild);
  }
}


function createDoodle(){
  if(!doodle.firstChild){
    const doodleFrame = document.createElement("iframe");
    doodleFrame.src = "doodle/index.html";
    doodleFrame.height = "100%";
    doodleFrame.width = "100%";
    doodleFrame.style.borderRadius = "20px";
    doodle.appendChild(doodleFrame);
  }
}

function removeDoodle() {
  while (doodle.firstChild) {
    doodle.removeChild(doodle.firstChild);
  }
}