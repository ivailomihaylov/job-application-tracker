import React from "react";
import Item from "./ListItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const List = ({ listItems, setListItems, saveLocalJobs }) => {
  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const items = Array.from(listItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setListItems(items);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="jobItems">
          {(provided) => (
            <ul
              className="list-group jobItems"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {listItems.map((item, index) => (
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
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  innerRef={provided.innerRef}
                  index={index}
                />
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default List;
