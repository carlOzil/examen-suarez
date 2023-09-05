document.addEventListener('DOMContentLoaded', () => {

    //Variables

    const urlPrincipal = "https://pokeapi.co/api/v2/pokemon";
    let inputBuscar = document.querySelector("#inputBuscar");
    let form = document.querySelector("#pokeForm")
    let pokemonBuscado = document.querySelector("#pokemonBuscado");
    let btnFav = document.querySelector("#agregarFav")


    let arrFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    let arrEncontrados = [];

    //Eventos
    form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        mostrarPokemon()
    });

    document.addEventListener('click', (ev) => {
        if (ev.target.id == 'agregarFav') {
            alLocal();
        };
    });

    //Funciones
    const alLocal = () => {
        localStorage.setItem('favoritos', JSON.stringify(arrFavoritos));
    };

    const mostrarPokemon = async (inputBuscar) => {
        try {
            const { ok, data } = await fetch(`${urlPrincipal}/${inputBuscar}`)
            if (ok) {

                const parrafoInfo = document.createElement("P");
                parrafoInfo.textContent = data.name;

                pokemonBuscado.append(parrafoInfo)

            } else {
                throw ('Error')
            }
        } catch (error) {
            console.log(error);
        };
    };

    // cosnt mostrarFavoritos = () => {
    //     const {} = alLocal()
    // };
    //Invocaciones
    console.log(inputBuscar)

}) //////////LOAD//////////