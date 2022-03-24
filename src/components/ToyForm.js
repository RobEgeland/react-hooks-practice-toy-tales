import React, {useState} from "react";

function ToyForm({handleNewToy}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")

  function handleName(e) {
    setName(e.target.value)
  }

  function handleImage(e) {
    setImage(e.target.value)
  }

  function handleSubmit() {
    const newToy = {
      "name": name,
      "image": image,
      "likes": 0
    }
    fetch("http://localhost:3001/toys", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newToy)
    })
    .then(res => res.json())
    .then(newToy => handleNewToy(newToy))
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input onChange={handleName}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          value={name}
          className="input-text"
        />
        <br />
        <input onChange={handleImage}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          value={image}
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
