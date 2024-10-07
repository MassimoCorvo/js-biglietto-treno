// Input chilometri, età
let kilometers = prompt("Inserisci il numero di chilometri");
let age = prompt("Inserisci l'età");

//Se almeno uno dei due valori è errato, non calcola il prezzo
if (isNaN(kilometers) || isNaN(age) || kilometers == null || age == null) {
    if (isNaN(kilometers) || kilometers == null) {
        alert("Numero chilometri non valido.");
    }


    if (isNaN(age) || age == null) {
        alert("Età non valida.");
    }
}

//Se entrambi i valori sono corretti, calcola il prezzo
else {

    console.log(kilometers);
    console.log(age);

    const pricePerKm = 0.21;
    let discount;

    //Calcolo dello sconto
    if (age < 18) {
        discount = 0.2;
    } else if (age >= 65) {
        discount = 0.4;
    } else {
        discount = 0;
    }

    //Calcolo del prezzo
    let price = pricePerKm * kilometers * (1 - discount);
    console.log(price);


    //Prezzo con due decimali
    console.log("Il prezzo finale è: " + price.toFixed(2) +"€");
}
