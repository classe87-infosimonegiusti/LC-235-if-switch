let frutto = 'mela';


if (frutto == "mela") {
    console.log("Oggi mangierò una mela");
} else if (frutto == "pera") {
    console.log("Oggi mangierò una pera");
} else if (frutto == "macedonia") {
    console.log("Oggi mangierò una pera");
    console.log("Oggi mangierò una mela");
} else if (frutto == "fragola") {
    console.log("Oggi mangierò una fragola");
} else {
    console.log("Oggi non mangio frutta");
}

switch (frutto) { //fa un confronto per identità
    case "mela": 
        console.log("Oggi mangierò una mela");
        break;
    case "macedonia": 
        console.log("Oggi mangierò una mela");
        console.log("Oggi mangierò una pera");
        break;
    case "pera":
        console.log("Oggi mangierò una pera");
        break;
    case "fragola":
        console.log("Oggi mangierò una fragola");
        break;
    default: // paragonabile alla else di un blocco if
        console.log("Oggi non mangio frutta");
}


/*
let varA = 5;
let varB = 10;
let varC = 50;

if (((varA == 5) && (varB == 10)) || (varC == "Pippo")) {



}

*/
