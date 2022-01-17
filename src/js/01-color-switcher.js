import '../css/common.css';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

let timerId = null;

refs.stopBtn.disabled = true;

refs.startBtn.addEventListener('click', () => {
  timerId = setInterval(changingBgColor, 1000);
  if (timerId !== null) { 
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
  };
});

refs.stopBtn.addEventListener('click', () => { 
  clearInterval(timerId);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
 });


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
function changingBgColor() { 
  console.log(getRandomHexColor());
  refs.body.style.backgroundColor = getRandomHexColor();
};
