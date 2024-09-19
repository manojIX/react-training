import { useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { itemListReducer } from "../../reducers/itemListReducer";
import CreateItemForm from "../CreateItemForm/CreateItemForm";
import ItemList from "../ItemList/ItemList";

export const ItemContext = createContext(null);
export const ItemReducerContext = createContext(null);

export default function ItemView() {
  const [items, dispatcher] = useReducer(itemListReducer, []);

  useEffect(() => console.log("Item list has been updated", items), [items]);

  return (
    <ItemContext.Provider value={items}>
      <ItemReducerContext.Provider value={dispatcher}>
        <CreateItemForm />
        <ItemList items={items} />
      </ItemReducerContext.Provider>
    </ItemContext.Provider>
  );
}
