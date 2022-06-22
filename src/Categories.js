import React from "react";

const Categories = ({ filterItems, itemButton }) => {
  return (
    <div className="btn-container">
      {itemButton.map((category) => {
        return (
          <button className="filter-btn" onClick={() => filterItems(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
