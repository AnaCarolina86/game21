//Arrays for building de deck and global variables
var valueCard = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "Q", "K"];
var typeCard = ["C", "D", "H", "S"];
var cardDeck = [];
var valueCards = 0;
var k = 0;

//constructor 
function Card(nameCard, valueCard, imageCard){
    this.nameCard = nameCard;
    this.valueCard = valueCard; 
    this.imageCard = imageCard;
}

//building the deck, and making a connection between the images and the array cardDeck
for(let i = 0; i<valueCard.length; i++){
    for(let j = 0; j<typeCard.length; j++){
        cardDeck[k] = new Card(valueCard[i] + typeCard[j], valueCard[i], valueCard[i] + typeCard[j] + ".png");
        k++;
    }
}

//Function to check if the player have won or lost
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

//Function to show the card to the user and update text and image
function showCard(){
    
    let seed = Math.floor(Math.random()*52);    
    document.getElementById("openCards").src = "images/" + cardDeck[seed].imageCard;
    let sum = sumCards(cardDeck[seed].valueCard);
    document.getElementById("sum").innerHTML = sum;
    checkWinner(sum);    
}

//Function that check card values and sum the values
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

//Function to start a new game
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





