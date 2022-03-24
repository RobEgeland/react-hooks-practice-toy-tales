import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(res => res.json())
    .then(toyArr => setToys(toyArr))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToy(newToy) {
    setToys([...toys, newToy])
  }

  function handleToyDelete(id) {
    const newToyArr = toys.filter((toy) => toy.id !== id);
    setToys(newToyArr)
  }

  function toyLikeUpdate(updatedToy) {
    const newToyArr = toys.map((toy) => {
      if(toy.id === updatedToy.id) {
        return updatedToy
      }else {
        return toy
      }
    })
    setToys(newToyArr)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleNewToy={handleNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyLikeUpdate={toyLikeUpdate} handleToyDelete={handleToyDelete} toys={toys} />
    </>
  );
}

export default App;
