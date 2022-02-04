import React, { useState } from "react";

function Item({ name, category }) {
  const [isClicked, setIsClicked] = useState(false) 

  function handleButtonClick() {
    setIsClicked(() => !isClicked)
  }

  return (
    <li className={isClicked ? 'in-cart': null}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleButtonClick} className={isClicked ? 'add' : 'remove'}>{!isClicked ? 'Add to Cart': 'Remove From Cart'}</button>
    </li>
  );
}

export default Item;
