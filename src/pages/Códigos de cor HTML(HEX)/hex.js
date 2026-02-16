
// Elements declaration
const input = document.getElementById('code-input');
const feedback = document.getElementById('feedback');
const image = document.getElementById('image');

// Variables
let codeInput;

// Functions
function confirmInput(){
    codeInput = input.value;

    if(codeInput == ''){
        feedback.textContent = 'Não introduziste nada maré '
    }
    else if(codeInput == '#bf121d'){
        feedback.textContent = 'Correto!'
        changeImage();
    }
    else if(codeInput == 'bf121d'){
        feedback.textContent = 'Não falta nada?'
    }
    else{
        feedback.textContent = 'Errado!'
    }
}

function changeImage(){
    image.style.background = '#669bbc'
    image.textContent = 'Passa o rato por cima pra revelar a foto'
    
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.1)';
        image.style.transition = '0.2s ease-in-out';
        image.style.background = 'url(/images/zepeter.png)'
        image.textContent = '';
    });

        image.addEventListener('mouseleave', () => {
        image.style.transition = 'all 0.2s ease';
        image.style.transform = 'scale(1)';
        image.style.background = ' #669bbc';
        image.textContent = 'Passa o rato por cima pra revelar a foto';
    });
}

