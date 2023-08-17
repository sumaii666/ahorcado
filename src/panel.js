class Panel
{
    constructor()
    {
        this.chosenWord = ["C", "O", "C", "I", "N", "A", "R"];
        this.lastWord = "";
        this.vector = [];
    }

    createLines(word)
    {
        const wordLength = word.length;

        for(let counter = 0; counter < wordLength; counter++)
        {
            console.log("_");
        }
    }

    checkWord(letter)
    {
        this.chosenWord.filter((word, index) => {

            if(word === letter)
            {
                console.log(index);
                this.vector[index] = letter;
            }

        });
        return
    }
}

const hangman = document.getElementById("hangman");

window.addEventListener("load", function(){

    const panel = new Panel();
    const generateHangman = panel.createLines();

    generateHangman.map(item => {

        const div = this.document.createElement("div")
        const span = this.document.createElement("span");

        span.textContent = item;
        div.classList = "";

        div.appendChild(span);
        hangman.appendChild(div);

    });
});

export {Panel}; 