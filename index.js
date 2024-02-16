//Assigning variables 
let player = {
    name: "Per",
    chips: 150
}
let cards = []
let sum = 0
let hasBlackJack = false
let valid = true
let message = " "
let messageEL = document.getElementById("message-el")       //Storing message-el in a variable 
let sumEl = document.getElementById("sum-el")               //Storing sum paragraph  in variable called sumEL
let cardsEl = document.getElementById("cards-el")
let playerEL = document.getElementById("player-el")         //  Getting the player-el paragraph and storing it in a variable called playerEl
playerEL.textContent = player.name + ": $" + player.chips   

//Generates random number from 1 to 13.
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  //If statement checks if number is  bigger than 10, returns 10 and if its equal to 1 we return 11 else print any number from 2-10
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
//Start game function that allows us to  get cards
function startGame() {
    valid = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard] //Allows  to see the cards in respective order
    sum = firstCard + secondCard    //Adds the values together
    renderGame()
}

function renderGame () {
    cardsEl.textContent = "Cards: " 
    //For loop which renders out all the cards
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    //If statement with their respective conditions
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?" 
    }
    else if (sum === 21) {
        message = "Congratulations, Blackjack!"
        hasBlackJack = true
    }
    else {
        message = "Busted!"
        valid = false
    }
    messageEL.textContent = message; //Prints the message in the messageEl using messageEL.textContent
}

function newCard() { //Function that draws out a new card from the deck

    if  (valid === true && hasBlackJack ===false){ 
        let card = getRandomCard()
        sum += card
        cards.push(card) //Push card to  array
        renderGame()
    }
}
