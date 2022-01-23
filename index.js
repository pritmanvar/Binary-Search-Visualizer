let number = document.getElementById('number');
let container = document.querySelector('.cards');
let button = document.querySelector('.remove');
let selectedCard = "";
let cardsNumber;
let cardsString = "";

console.log(button.parentNode.id);

// number.innerText
function generateCards() {
    cardsNumber = number.value;
    for(let i = 1; i <= cardsNumber; i++){
        cardsString += `
                <div class="card" id="card${i}">
                    <div class="hoverCard card" onclick="select(parentNode.id)">
                        <h1>Select Me</h1>
                    </div>
                    <h2>${i}</h2>
                    <button type="button" class="btn remove" onclick="removeLeft(parentNode.id)">Remove Left</button>
                    <button type="button" class="btn remove" onclick="removeRight(parentNode.id)">Remove Right</button>
                </div>`;
        
        container.innerHTML = cardsString;
    }
}

function select(parentID) {
    let parentDiv = document.getElementById(parentID);
    if(selectedCard === ""){
        selectedCard = parentID;
        parentDiv.style.background = "#fff600ce";
        for(let i = 1; i <= cardsNumber; i++){
            document.querySelector(`#card${i} .hoverCard h1`).innerHTML = "Guess Me";
        }
    }else{
        parentDiv.style.background = "#ffffffce"
        if(parentID === selectedCard){
            document.querySelector('.correctGuess').style.display = "flex";
        }
    }
}

function removeLeft(parentID) {
    let cardNo = parentID.substring(4);
    cardNo = parseInt(cardNo);
    for(let i = 1; i <= cardNo; i++){
        document.getElementById(`card${i}`).style.display = "none";
    }
}
function removeRight(parentID) {
    let cardNo = parentID.substring(4);
    cardNo = parseInt(cardNo);
    for(let i = cardNo; i <= cardsNumber; i++){
        document.getElementById(`card${i}`).style.display = "none";
    }
}

function init() {
    selectedCard = "";
    document.querySelector('.correctGuess').style.display = "none";
    generateCards();
}