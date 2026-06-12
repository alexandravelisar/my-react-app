interface Pokemon {
    name: string;
    imgSrc?: string;
}
interface PokemonCardProps {
    pokemon: Pokemon;
}
function PokemonCard(props: PokemonCardProps) {
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
