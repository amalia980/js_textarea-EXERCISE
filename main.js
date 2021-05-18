const area1 = document.getElementById("input-area");
const area2 = document.getElementById("output-area");

function reverseText(text) {
    const letters = text.split("");//hämta alla bokstäver i texten(denna ger oss en array)

    const reversedLetters = letters.reverse();//gör så att arrayen går baklänges

    const finalText = reversedLetters.join("");//limma ihop alla bokstäver från arrayen till en sträng igen

    return finalText;
}

function whenKeyUp(event) {
    const textValue = event.target.value; //texten från input fältet
    const textValueBackwards = reverseText(textValue);
    

    area2.value = textValueBackwards;
}

area1.addEventListener("keyup", whenKeyUp);

//=============================================================

function createSquare() {
    const square = document.createElement("div");
    square.innerText = "You are typing something!";
    return square;

}

function insertSquare(square, parent) {
    parent.appendChild(square);
}

const mySquare = createSquare();
insertSquare(mySquare, document.body);

//============================================

function whenKeyDown(event) {
    const mySquare = createSquare();
    insertSquare(mySquare, document.body);
}

// vi lägger till en "keydown" eventlistener på våran första textarea.
area1.addEventListener("keydown", whenKeyDown);

