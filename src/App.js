import React, { useEffect, useState } from "react";
import "./App.css";
import { Stocks } from "./Stocks";
import { stockData } from "./Data";
import Button from "@mui/material/Button";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const reorder = (list, startIndex, endIndex) => {
  const res = Array.from(list);
  const [removed] = res.splice(startIndex, 1);
  res.splice(endIndex, 0, removed);
  return res;
};

function App() {
  const [ischanged, setischanged] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(stockData);
  }, []);

  const handleischanged = () => {
    setischanged(true);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedList = reorder(
      items,
      result.source.index,
      result.destination.index
    );
    console.log(reorderedList);
    setItems(reorderedList);
  };

  return (
    <div className="App">
      <h1> Select option </h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {items?.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => {
                    return (
                      <span
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Stocks item={item} handleischanged={handleischanged} />
                      </span>
                    );
                  }}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <Button
        className="button"
        variant="contained"
        {...(ischanged ? {} : { disabled: true })}
      >
        Save and Next
      </Button>
    </div>
  );
}

export default App;
