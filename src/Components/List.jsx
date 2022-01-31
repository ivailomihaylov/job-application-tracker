import React from "react";
import Item from "./ListItem";
const List = ({ listItems, setListItems, saveLocalJobs }) => {
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
            customNotes={item.customNotes}
            setListItems={setListItems}
            listItems={listItems}
            key={item.id}
            saveLocalJobs={saveLocalJobs}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
