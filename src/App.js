import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuData, setMenuData] = useState(items);
  // const [categoryData, setCategoryData] = useState([]);

  function filterItems(categoryName) {
    let breakFastArray = items.filter((obj) => obj.category === categoryName);
    setMenuData(breakFastArray);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} />
        <Menu items={menuData} />
      </section>
    </main>
  );
}

export default App;
