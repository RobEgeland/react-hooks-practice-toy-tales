import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, handleToyDelete, toyLikeUpdate}) {

  return (
    <div id="toy-collection">{toys.map((toy) => <ToyCard toyLikeUpdate={toyLikeUpdate} handleToyDelete={handleToyDelete} key={toy.name} id={toy.id} name={toy.name} img={toy.image} likes={toy.likes} />)}</div>
  );
}

export default ToyContainer;
