import { useReducer } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useItemManager } from "../../hooks/useItemOrderer";
import { taskControlReducer } from "../../reducers/taskControlReducer";
import TaskListControls from "../TaskListControls/TaskListControls";
import { ItemContext, ItemReducerContext } from "../TaskView/ItemView";

export default function ItemList({ items }) {
  const dispatcher = useContext(ItemReducerContext);
  const handleClick = (e, id) => {
    e.preventDefault();
    dispatcher({ type: "remove", id });
  };

  const { sortedAndFilteredItems, setFilter, setSortTerm } =
    useItemManager(items);

  return (
    <>
      <TaskListControls setFilter={setFilter} setSortItem={setSortTerm} />
      <ul>
        {sortedAndFilteredItems.map((item) => (
          <li>
            {item.name} {}
            {item.description} {}
            <button onClick={(e) => handleClick(e, item.id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}
