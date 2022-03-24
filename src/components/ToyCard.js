import React from "react";

function ToyCard({name, img, likes, id, handleToyDelete, toyLikeUpdate}) {

  function handleDelete() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(res => handleToyDelete(id))
  }

  function handleLikeUpdate() {
    const toyLikes = likes + 1
    fetch(`http://localhost:3001/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"likes": toyLikes})
    })
    .then(res => res.json())
    .then((updatedToy) => toyLikeUpdate(updatedToy))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={img}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLikeUpdate} className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
