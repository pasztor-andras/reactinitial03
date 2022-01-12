import React, { useState } from "react";

function Character({ characters }) {
  
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div>
      {characters.map(character => (
        <div key={character.name}>
          <h3>{character.name}</h3>
          { showDetails && <p>{character.details}</p>}
          <button disabled={!"disabled"} onClick={()=> setShowDetails(!showDetails) }>{showDetails ? "Show Less" : "Show More"}</button>
        </div>
      ))}
    </div>
  );
}

export default Character;
