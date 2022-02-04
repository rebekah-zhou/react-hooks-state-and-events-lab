import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterBy, setFilterBy] = useState("All")
  //const [foods, setFoods] = useState(items)

  const foodsToDisplay = items.filter(item => {
    if (filterBy === "All") {
      return true
    } else {
      return item.category === filterBy
    }
      
  })

  const foodList = foodsToDisplay.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))

  function handleSelectChange(e) {
    setFilterBy(e.target.value)
  }
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleSelectChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {foodList}
      </ul>
    </div>
  );
}

export default ShoppingList;
