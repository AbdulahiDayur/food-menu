import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuData, setMenuData] = useState(items);
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <button>All</button>
        </div>
        <div className="section-center ">
          {menuData.map((theFood) => {
            return <Menu key={theFood.id} {...theFood} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
