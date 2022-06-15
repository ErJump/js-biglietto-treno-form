//Dichiaro button riprendendo tramite id
const button = document.getElementById("submit-button");
const buttonReset = document.getElementById("reset-button");
//dichiaro l'evento basato su click del bottone
button.addEventListener('click', function(){
    //dichiaro le variabili chiedendo all'utente età e km tramite i tag input
    const userAge = parseInt(document.getElementById("input-user-age").value);
    const userTravel = parseInt(document.getElementById("input-user-km").value);
    const userName = document.getElementById("input-user-nominative").value;
    //calcolo il prezzo base
    const normalPrice = (userTravel * 0.26).toFixed(2);
    let result;

    //il contenuto del tag con id passenger name viene sostituito con il nome dell'utente 
    document.getElementById("passenger-name").innerHTML = userName;

    //calcolo randomicamente il numero della carrozza
    document.getElementById("carriage").innerHTML = Math.floor(Math.random() * 10 + 1);
    
    //casi per età
    if (userAge < 18){
        //nel caso di minorenni viene applicato un 15% di sconto
        result = (normalPrice - ((normalPrice * 15) / 100)).toFixed(2);
        document.getElementById("result").innerHTML = `Sei giovine. Il prezzo del tuo biglietto è ${result}€ già scontato.`;
    } else if (userAge >= 65){
        //nel caso di maggiori di 65 anni viene applicato un 35% di sconto
        result = (normalPrice - ((normalPrice * 35) / 100)).toFixed(2);
        document.getElementById("result").innerHTML = `Sei vecchio. Il prezzo del tuo biglietto è ${result}€ già scontato.`;
    } else {
        //altrimenti non viene applicato sconto e mostrato il prezzo di base
        document.getElementById("result").innerHTML = `Il prezzo del tuo biglietto è ${normalPrice}€.`;
    }
});


//quando reset viene clickato i valori degli input diventano null
buttonReset.addEventListener('click', function(){
    document.getElementById("input-user-age").value = null;
    document.getElementById("input-user-km").value = null;
    document.getElementById("input-user-nominative").value = null;
});
