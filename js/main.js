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
        image: "";
        title: "";
        description: "";
    }
    {
        image: "";
        title: "";
        description: "";
    }
    {
        image: "";
        title: "";
        description: "";
    }
    {
        image: "";
        title: "";
        description: "";
    }
    {
        image: "";
        title: "";
        description: "";
    }
];

//! creare il codice per inserire gli elementi all'interno del DOM dell'id "my-before-carousel"


//! inserire gli elementi creati all'interno del DOM  di "my-before-carousel"
document.getElementById('my-before-carousel').innerHTML = "";