/* Chiedo l'età di due persone e decido chi è la più grande */

const eta1 = parseInt(prompt('Età della prima persona'));
const eta2 = parseInt(prompt('Età della seconda persona'));

if (isNaN(eta1) || isNaN(eta2)) {
    console.log('Impossibile fare il calcolo, hai inserito qualcosa che non è un numero');
} else {
    if (eta1 > eta2) {
        console.log('Età 1 maggiore di età 2');
    } else if (eta2 > eta1) {
        console.log('Età 2 maggiore di età 1');
    } else if (eta1 == eta2) {
        console.log('Coetanei');
    } else {
        console.log('Si è verificato un errore...');
    }
}