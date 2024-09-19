import { useContext } from "react";
import { useItemManager } from "../../hooks/useItemOrderer";
import TaskListControls from "../ItemListControls/ItemListControls";
import { ItemReducerContext } from "../ItemView/ItemView";

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
