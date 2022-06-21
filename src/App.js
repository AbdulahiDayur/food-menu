import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuData, setMenuData] = useState(items);
  const [categoryData, setCategoryData] = useState([]);

  function handelBreakfast() {
    //   console.log("breakfast");
    //   let breakFastArray = items.filter((obj) => obj.category === "breakfast");
    //   setCategoryData(breakFastArray);
    //   <div className="section-center ">
    //     {categoryData.map((itemObj) => {
    //       return <Categories key={itemObj.id} {...itemObj} />;
    //     })}
    //   </div>;
    // setMenuData((prevItems) => {
    //   return prevItems.filter((obj) => obj.category === "breakfast");
    // });
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <button className="filter-btn">All</button>
          <button onClick={handelBreakfast} className="filter-btn">
            BreakFast
          </button>
          <button className="filter-btn">Lunch</button>
          <button className="filter-btn">Shakes</button>
        </div>
        <Categories />
        <Menu items={menuData} />;
      </section>
    </main>
  );
}

export default App;
