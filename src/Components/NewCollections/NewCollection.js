import React from "react";
import "./NewCollection.css";
import newc from "../Assets/new_collections";
import Items from "../Items/Items";

function NewCollection() {
  return (
    <>
      <div class="new-collection">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div class="collections">
          {newc.map((item, i) => {
            return (
              <Items
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
export default NewCollection;
