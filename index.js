//Build the deck
var valueCard = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "Q", "K"];
var typeCard = ["C", "D", "H", "S"];
var cardDeck = [];
var valueCards = 0;
var k = 0;

function Card(nameCard, valueCard, imageCard){
    this.nameCard = nameCard;
    this.valueCard = valueCard; 
    this.imageCard = imageCard;
}

for(let i = 0; i<valueCard.length; i++){
    for(let j = 0; j<typeCard.length; j++){
        //cardDeck[k] = valueCard[i] + typeCard[j];
        cardDeck[k] = new Card(valueCard[i] + typeCard[j], valueCard[i], valueCard[i] + typeCard[j] + ".png");
        k++;
    }
}

//var cardDeckCopy = cardDeck.slice();

function checkWinner(value){
    if(value > 21){
        document.getElementById("sum").innerHTML = "You lost!!!";
        document.getElementById("give").innerHTML = "Press New Game";
    }
    else if(value == 21){
        document.getElementById("sum").innerHTML = value + " You won!!!";
    }
    else {
        document.getElementById("give").innerHTML = "Give me one more";
    }
    
}

function showCard(){
    
    let seed = Math.floor(Math.random()*52);    
    document.getElementById("openCards").src = "images/" + cardDeck[seed].imageCard;
    let sum = sumCards(cardDeck[seed].valueCard);
    document.getElementById("sum").innerHTML = sum;
    checkWinner(sum);    
}

function sumCards(value){
    if(typeof(value) == "number"){
        valueCards += value;
    }
    else if (value[0] === "A"){
        valueCards += 1;
    }
    else{
        valueCards += 10;
    }
    return valueCards;
}

function newGame(){
    valueCards = 0;
    document.getElementById("openCards").src = "images/yellow_back.png";
    document.getElementById("sum").innerHTML = "Let's play";
    document.getElementById("give").innerHTML = "Give me One Card";
}

// Handling with the bottons
document.getElementById("give").addEventListener("click", showCard);
document.getElementById("newGame").addEventListener("click", newGame);
document.getElementById("stop").addEventListener("click", newGame);





