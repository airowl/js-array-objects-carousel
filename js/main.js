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
        title: "Lorem Ipsum",
        description: "Lorem ipsum description"
    },
    {
        image: "2.jpg",
        title: "Lorem Ipsum",
        description: "description"
    },
    {
        image: "3.jpg",
        title: "Lorem Ipsum",
        description: "description"
    },
    {
        image: "4.jpg",
        title: "Lorem Ipsum",
        description: "description"
    },
    {
        image: "5.jpg",
        title: "Lorem Ipsum",
        description: "description"
    }
];

//! creare il codice per inserire gli elementi all'interno del DOM dell'id "my-before-carousel"
let elementsDom = "";
for (let i = 0; i < carouselElements.length; i++) {
    
    elementsDom += addElements(carouselElements[i].image, carouselElements[i].title, carouselElements[i].description);
}

//! inserire gli elementi creati all'interno del DOM  di "my-before-carousel"
document.querySelector('.my-carousel-images').innerHTML += elementsDom ;


/**
 * Funzione per creare un elemento da aggiungere al DOM
 * 
 * @param {*} img 
 * @param {*} title 
 * @param {*} desc 
 * @returns elemento
 */
function addElements(img, title, desc) {
    let item = "";
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