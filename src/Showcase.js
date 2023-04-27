import blastoise from "./images/blastoise.jpg";
import "./Showcase.css";

function Showcase() {
  const favPokemon = "Blastoise";
  const pokeCharacteristics = {
    type: "Water",
    move: "Hydropump"
  };
  return (
    <div className="container">
      <h1>{favPokemon}'s Showcase Component</h1>
      <img
        style={{ width: 200, height: 200, borderRadius: "50%" }}
        src={blastoise}
        alt={favPokemon}
      ></img>
      <h2>
        {favPokemon}'s type is{" "}
        <span style={{ backgroundColor: "green", color: "white" }}>
          {pokeCharacteristics.type}
        </span>{" "}
        and one of their moves is{" "}
        <span style={{ backgroundColor: "white", color: "green" }}>
          {pokeCharacteristics.move}
        </span>
      </h2>
    </div>
  );
}

export default Showcase;
