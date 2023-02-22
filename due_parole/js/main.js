/* creo un programma che richieda 2 parole al nostro utente. 
Il programma calcola la parola più lunga e lo comunica, in console, all'utente */

const parola1 = prompt('Inserisci la prima parola');
const parola2 = prompt('Inserisci la seconda parola');

const lunghezzaParola1 = parola1.length;
const lunghezzaParola2 = parola2.length;

if (lunghezzaParola1 > lunghezzaParola2) {
    console.log('La prima parola è più lunga');
} else if (lunghezzaParola1 == lunghezzaParola2) {
    console.log('Le due parole hanno la stessa lunghezza')
} else {
    console.log('La seconda parola è più lunga');
}