function PokemonCard(props) {
    console.log(props.pokemon)
    const { pokemon } = props;
    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.imgSrc} />
        </div>
    );
}

// ...


export default PokemonCard;
