
import { Pokemon } from "./api/pokemon-api.js";

const pokemon = new Pokemon();

var wrongGuesses;
const maxGuesses = 6;
var currentWord;
var correctLetters;

const keyboardContainer = document.getElementById("keyboard_container");
const wordContainer = document.getElementById("word_container");
const imgContainer = document.getElementById("img_container");
const tryContainer = document.getElementById("try_container");
const gameModal = document.getElementById("game_modal");
const playAgain = document.getElementById("play_again");

const resetGame = () => {

    correctLetters =[];
    wrongGuesses = 0;

    tryContainer.textContent = `${wrongGuesses} / ${maxGuesses}`;

    keyboardContainer.querySelectorAll("button").forEach(btn => btn.disabled = false);

    //Display word . . .
    const wordContainer = document.getElementById('word_container');
    wordContainer.innerHTML = currentWord.split("").map(() => `<div class="word_letter">_</div>`).join("");
    gameModal.classList.remove("show");
}

async function displayWord()
{
    const traerPokemon = await pokemon.obtenerDatosAwait();
    currentWord = traerPokemon.name;

    imgContainer.src = traerPokemon.sprites.versions[`generation-v`][`black-white`].animated[`front_default`];

    resetGame();
}

const gameOver = (isVictory) => {

    setTimeout(() => {

        const modalText = isVictory ? "You found the word:" : "The correct word was:";
        gameModal.querySelector("h4").innerText = `${isVictory ? "Congrats!" : "Game Over"}`;
        gameModal.querySelector("p").innerText = `${modalText} <b>${currentWord}</b>`;
        gameModal.classList.add("show");

    }, 300);

}

const initGame = (button, clickedLetter) => {

    if(currentWord.includes(clickedLetter))
    {
        [...currentWord].forEach((letter,index) => {

            if(letter === clickedLetter)
            {
                correctLetters.push(letter);
                wordContainer.querySelectorAll("div")[index].innerText = letter;
            }
        });
    }
    else
    {
        wrongGuesses++;
    }

    button.disabled = true;
    tryContainer.textContent = `${wrongGuesses} / ${maxGuesses}`;

    if(wrongGuesses === maxGuesses) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);
}

function displayKeyboard()
{
    for(let counter = 97; counter <= 122; counter++)
    {
        const button = document.createElement("button");
        button.innerHTML = String.fromCharCode(counter);
        keyboardContainer.appendChild(button);

        button.addEventListener("click", e => initGame(e.target, String.fromCharCode(counter)));
    }
}

displayWord();
displayKeyboard();
playAgain.addEventListener("click", displayWord);





