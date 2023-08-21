class Result
{
    constructor()
    {
        this.message = "Volver a empezar";
    }

    showResult(value)
    {
        if(value == true)
        {
            return this.message = "¡Victory!"
        }
        else
        {
            return this.message = "¡Defeat!"
        }
    }
}

const result = new Result();
console.log(result.showResult(true));