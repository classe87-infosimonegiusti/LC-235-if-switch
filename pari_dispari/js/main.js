/* 
    Decidiamo se scegliere pari o dispari
    Decidiamo il valore del dado che vogliamo lanciare
    Il computer lancia il suo dado e salviamo il valore del numero uscito
    Sommiamo i due valori e verifichiamo se la somma tra il numero che abbiamo scelto e il valore casuale del computer sia pari o dispari
    Infine decidiamo chi vince
*/

let pariDispari = prompt('Decidi se puntare su pari o dispari');
console.log(pariDispari);

let numeroUtente = parseInt(prompt('Inserisci un numero tra 1 e 6'));
console.log(numeroUtente);

let numeroComputer = Math.floor(Math.random() * 6) + 1;
console.log(numeroComputer);

let somma = numeroComputer + numeroUtente;
console.log(somma);

let risultato;

if (somma % 2 == 0) {
    risultato = "pari";
} else {
    risultato = "dispari";
}

if (risultato == pariDispari) {
    console.log("Vince l'utente");
} else {
    console.log('Vince il computer');
}

