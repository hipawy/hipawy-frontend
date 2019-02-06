import React from "react";
const Card = ({ pet }) => {
  return (
    <div>
      <img src={pet.photo} className="w-100" alt="pet image" />
      <h3>{pet.name}</h3>
      <h6>{pet.category}</h6>
      <h6>{pet.breed}</h6>
      <h6>{pet.age}</h6>
      <h6>{pet.desc}</h6>
    </div>
  );
};

export default Card;
