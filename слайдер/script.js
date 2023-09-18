const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const sideBar = document.querySelector(".sidebar");
const mainBar = document.querySelector(".main-slide");
const container = document.querySelector('.container')
const slidesCount = mainBar.querySelectorAll("div").length;
let currentSlide = 0;
sideBar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  if (direction === "up") {
    currentSlide++;
    if (currentSlide === slidesCount){
        currentSlide = 0;
    }
  }else if(direction === 'down'){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = slidesCount - 1;
    }
  }
  const height = container.clientHeight;
  mainBar.style.transform =`translateY(-${currentSlide * height}px)`
  sideBar.style.transform =`translateY(${currentSlide * height}px)`
}
