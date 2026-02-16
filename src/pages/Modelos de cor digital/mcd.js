

// Elements declaration
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const option5 = document.getElementById('option5');

const feedback = document.getElementById('feedback');
const codePart = document.getElementById('code-part');


// Functions
option1.addEventListener('click', event => {
    setBackOriginal();
    event.target.style.border = "6px solid #ff0000"
    feedback.textContent = 'Errado!'
});

option2.addEventListener('click', event => {
    setBackOriginal();
    event.target.style.border = "6px solid #ff0000"
    feedback.textContent = 'Errado!'
});

option3.addEventListener('click', event => {
    setBackOriginal();
    event.target.style.border = "6px solid #ff0000"
    feedback.textContent = 'Errado!'
});

option4.addEventListener('click', event => {
    setBackOriginal();
    event.target.style.border = "6px solid #18d100"
    feedback.textContent = 'Correto!'
    codePart.textContent = 'Parte do código final: c1'
});

option5.addEventListener('click', event => {
    setBackOriginal();
    event.target.style.border = "6px solid #ff0000"
    feedback.textContent = 'Errado!'
});


function setBackOriginal(){
    option1.style.border = "6px solid #fdf0d5"
    option2.style.border = "6px solid #fdf0d5"
    option3.style.border = "6px solid #fdf0d5"
    option4.style.border = "6px solid #fdf0d5"
    option5.style.border = "6px solid #fdf0d5"

    codePart.textContent = ''
}