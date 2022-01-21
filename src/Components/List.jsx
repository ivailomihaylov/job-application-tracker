import React from "react";
import Item from "./ListItem";
const List = ({ listItems, setListItems }) => {
  return (
    <div>
      <ul className="list-group">
        {listItems.map((item) => (
          <Item
            company={item.company}
            position={item.position}
            timestamp={item.timestamp}
            image={item.image}
            id={item.id}
            item={item}
            setListItems={setListItems}
            listItems={listItems}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
