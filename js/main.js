/**
 *
 *
 *
Riprendiamo l'esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice scritto oggi insieme a lezione, che troverete direttamente nella mia repository di github a questo link: [link github]

Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto dei tre array separati, con una sola regola: non è possibile modificare l'HTML ma solamente JS e CSS.
Ricordiamo sempre l'importanza dell'integrità del dato.

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?

 *
 */

//! bisogna creare un un array di oggetti
//* le elementi da inserire sono 
//* - immagini
//* - title immagini
//* - description

const carouselElements = [
    {
        image: "1.jpg",
        title: "THE DEVELOPER",
        description: "Fa tante cose FIGHE che non capisce"
    },
    {
        image: "2.jpg",
        title: "THE CODE",
        description: "Che manco io capisco"
    },
    {
        image: "3.jpg",
        title: "THE SCRIVANIA",
        description: "Mi serve solo per appoggiare il pc e il cibo che mangio"
    },
    {
        image: "4.jpg",
        title: "THE OCCHIALI",
        description: "Mi servono per vedere non per annusare"
    },
    {
        image: "5.jpg",
        title: "THE CODE, again",
        description: "Questo lo copiato, Grazie stackoverflow"
    }
];

//! creare il codice per inserire gli elementi all'interno del DOM dell'id "my-before-carousel"
let elementsDom = "";
let elementsDomThumb = "";
for (let i = 0; i < carouselElements.length; i++) {
    elementsDom += addElements(carouselElements[i].image, carouselElements[i].title, carouselElements[i].description);
    elementsDomThumb += addElementsThumb(carouselElements[i].image);
}

//! inserire gli elementi creati all'interno del DOM  di "my-before-carousel"
document.querySelector('.my-carousel-images').innerHTML += elementsDom;

//! inserire gli elementi creati all'interno del DOM di "my-thumbnails"
document.querySelector('.my-thumbnails').innerHTML += elementsDomThumb;

//! Devo inserire la class active al primo elemento per far si che si veda
let activeElement = 0;

const boxItems = document.querySelectorAll('.box');

boxItems[activeElement].classList.add('active');

//! inserimento della classe active al primo thumbnail image
const boxItemsThumb = document.querySelectorAll('.thumbnails-img');

boxItemsThumb[activeElement].classList.add('active-thumb');

//! inserire degli event listener sui bottoni left e right
document.querySelector('.my-previous').addEventListener('click', function() {
    boxItems[activeElement].classList.remove('active');
    boxItemsThumb[activeElement].classList.remove('active-thumb');

    if ( activeElement == 0) {
        activeElement = boxItems.length - 1
    } else {
        activeElement--;
    }

    boxItems[activeElement].classList.add('active');
    boxItemsThumb[activeElement].classList.add('active-thumb');

    stopSetInterval(timeGo);
    stopSetInterval(timeBack);
});

document.querySelector('.my-next').addEventListener('click', function() {

    boxItems[activeElement].classList.remove('active');
    boxItemsThumb[activeElement].classList.remove('active-thumb');

    if (activeElement == boxItems.length - 1) {
        activeElement = 0;
    } else {
        activeElement++;
    }

    boxItems[activeElement].classList.add('active');
    boxItemsThumb[activeElement].classList.add('active-thumb');

    stopSetInterval(timeGo);
    stopSetInterval(timeBack);

});

// for (let i = 0; i < boxItemsThumb.length; i++) {
    
//     boxItemsThumb[i].addEventListener('click', function(){

//         if (boxItemsThumb[i].classList.contains('active-thumb') && boxItems[i].classList.contains('active')) {
//             boxItemsThumb[i].classList.remove('active-thumb');
//             boxItems[i].classList.remove('active');
//         } else {
//             boxItemsThumb[i].classList.add('active-thumb');
//             boxItems[i].classList.add('active');
//         }

//     });

// }


//!! set interval part
document.getElementById('my-after-carousel').classList.add('d-flex', 'justify-content-evenly');

document.getElementById('my-after-carousel').innerHTML = `
<button type="button" class="btn btn-success" id="time-left">Time Left</button>
<button type="button" class="btn btn-warning" id="time-right">Time Right</button>
`;

let timeGo;

document.querySelector('#time-right').addEventListener('click', function() {
    
    stopSetInterval(timeBack);

    const timeForNext = setInterval(timeNext, 1000);

    timeGo = timeForNext
});

let timeBack;

document.querySelector('#time-left').addEventListener('click', function() {
    
    stopSetInterval(timeGo);

    const timeForPrev = setInterval(timePrev, 1000);

    timeBack = timeForPrev
});


//?@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@FUNCTIONS@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function clickAndSelect(x){
    

}

function timeNext(){
    boxItems[activeElement].classList.remove('active');
    boxItemsThumb[activeElement].classList.remove('active-thumb');

    if (activeElement == boxItems.length - 1) {
        activeElement = 0;
    } else {
        activeElement++;
    }

    boxItems[activeElement].classList.add('active');
    boxItemsThumb[activeElement].classList.add('active-thumb');
}

function timePrev(){
    boxItems[activeElement].classList.remove('active');
    boxItemsThumb[activeElement].classList.remove('active-thumb');

    if ( activeElement == 0) {
        activeElement = boxItems.length - 1
    } else {
        activeElement--;
    }

    boxItems[activeElement].classList.add('active');
    boxItemsThumb[activeElement].classList.add('active-thumb');
}

function stopSetInterval(nameOFSetInterval){
    clearInterval(nameOFSetInterval);
}

/**
 * Funzione per creare un elemento da aggiungere al DOM
 * 
 * @param {*} img 
 * @param {*} title 
 * @param {*} desc 
 * @returns elemento
 */
function addElements(img, title, desc) {
    return `
    <div class="box">
        <div class="overlay"></div>
        <img src="img/${img}" alt="name Image" />
        <div class="carousel-text">
            <h3>${title}</h3>
            <p>${desc}</p>
        </div>
    </div>
    `;
}

function addElementsThumb(img) {
    return `
    <div class="thumbnails-img">
        <img src="img/${img}" alt="name Image" />
    </div>
    `;
}