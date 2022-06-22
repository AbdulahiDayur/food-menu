import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

let itemButton = ["All", ...new Set(items.map((obj) => obj.category))];

function App() {
  const [menuData, setMenuData] = useState(items);
  const [categoryData, setCategoryData] = useState(itemButton);

  function filterItems(categoryName) {
    if (categoryName === "All") {
      setMenuData(items);
      return;
    }
    let newMenuArray = items.filter((obj) => obj.category === categoryName);
    setMenuData(newMenuArray);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} itemButton={categoryData} />
        <Menu items={menuData} />
      </section>
    </main>
  );
}

export default App;
