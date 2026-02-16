
// Elements declaration
const slider1 = document.getElementById('slider1');
const slider2 = document.getElementById('slider2');
const slider3 = document.getElementById('slider3');

const slidersColor = document.getElementById('sliders-color');

const vermelho = document.getElementById('vermelho');
const verde = document.getElementById('verde');
const azul = document.getElementById('azul');

const feedback = document.getElementById('feedback');
const codePart = document.getElementById('code-part');


// Values Declaration
let valorVermelho = slider1.value;
let valorVerde = slider2.value;
let valorAzul = slider3.value;

// Hints declaration
let vermelhoHint;
let verdeHint;
let azulHint;


// Functions
slider1.addEventListener('click', event => {
    updateValues();
    updateHints();
    changeColor();
    checkRightColor();
});

slider2.addEventListener('click', event => {
    updateValues();
    updateHints();
    changeColor();
    checkRightColor();
});

slider3.addEventListener('click', event => {
    updateValues();
    updateHints();
    changeColor();
    checkRightColor();
});

function updateValues(){
    valorVermelho = Number(slider1.value);
    valorVerde = Number(slider2.value);
    valorAzul = Number(slider3.value);
}

function updateHints(){
    
    if(valorVermelho < 174){
        vermelhoHint = 'Este valor é maior';
    } else if(valorVermelho === 174){
        vermelhoHint = 'Este valor está correto';
    } else{
        vermelhoHint = 'Este valor é mais baixo';
    }

    if(valorVerde < 10){
        verdeHint = 'Este valor é maior';
    } else if(valorVerde === 10){
        verdeHint = 'Este valor está correto';
    } else{
        verdeHint = 'Este valor é mais baixo';
    }

    if(valorAzul < 207){
        azulHint = 'Este valor é maior';
    } else if(valorAzul === 207){
        azulHint = 'Este valor está correto';
    } else{
        azulHint = 'Este valor é mais baixo';
    }

}

function changeColor(){
    slidersColor.style.background = `rgb(${valorVermelho}, ${valorVerde}, ${valorAzul})`;

    vermelho.textContent = `Valor de vermelho: ${valorVermelho} (${vermelhoHint})`;
    verde.textContent = `Valor de vermelho: ${valorVerde} (${verdeHint})`;
    azul.textContent = `Valor de vermelho: ${valorAzul} (${azulHint})`;
}

function checkRightColor(){
    if(valorVermelho === 174 && valorVerde === 10 && valorAzul === 207){
        feedback.textContent = 'Combinação correta!'
        codePart.textContent = 'Parte do código final: 12'
    }

}
