class Pokemon
{
    constructor()
    {
      this.id = 0;
      this.vect = {};
      this.nombrePokemon ='';
    }

    async obtenerDatosAwait()
    {
        this.id = Math.floor(Math.random() * (200 - 0), 0);
        const apiUrl =`https://pokeapi.co/api/v2/pokemon/${this.id}`;

        try
        {
            const response = await fetch(apiUrl);

            if (!response.ok) 
            {
                throw new Error("no se pudo obtener la información...");
            }

            const data = await response.json();
            return data;
        }
        catch(error)
        {
            console.log("error al obtener los datos", error);
        }
  }
  
}

export { Pokemon };