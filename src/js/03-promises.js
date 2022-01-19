import '../css/common.css';

const refs = {
  form: document.querySelector('.form')
}

refs.form.addEventListener('submit', onFormSubmit)

function onFormSubmit(e) {  
  e.preventDefault();
  let delay = +refs.form.delay.value;
  let step = +refs.form.step.value;
  let amount = +refs.form.amount.value;


  for (let position = 1; position <= amount; position += 1) {   
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`)
      });
      
    delay += step;
  }
} 

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {    
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);   
  })  
}