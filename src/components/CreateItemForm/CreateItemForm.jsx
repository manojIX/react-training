import { useReducer } from "react";
import { useContext } from "react";
import { useState } from "react";
import { uid } from "uid";
import { useFormInput } from "../../hooks/useFormInput";
import { itemListReducer } from "../../reducers/itemListReducer";
import { ItemReducerContext } from "../TaskView/ItemView";

export default function CreateItemForm() {
  const itemName = useFormInput();
  const itemDescription = useFormInput();

  const dispatcher = useContext(ItemReducerContext);

  const handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    if (itemName.value === undefined || itemDescription.value === undefined) {
      return;
    }
    dispatcher({
      type: "add",
      id: uid(),
      name: itemName.value,
      description: itemDescription.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input name="itemName" {...itemName} />
      <label>Description:</label>
      <input name="itemDescription" {...itemDescription} />
      <button type="submit">Add Item</button>
    </form>
  );
}
