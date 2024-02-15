const imgSlider = document.querySelectorAll("div.slider img");
const sliderGroup = document.querySelector("div.container-slide");

const screenWidth = window.innerWidth;

imgSlider.forEach((e, i) => {
  const screenWidth = window.innerWidth;
  e.style = `left: ${i * screenWidth}px;`;
});

let i = 0;
setInterval(() => {
  i++;
  if (i === imgSlider.length) {
    i = 0;
  }
  sliderGroup.style = `left: ${-i * screenWidth}px;`;
}, 5000);
