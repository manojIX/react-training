import { useLayoutEffect } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { uid } from "uid";
import { useFormInput } from "../../hooks/useFormInput";
import { ItemReducerContext } from "../ItemView/ItemView";

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

  const inputRef = useRef(null);

  useLayoutEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input ref={inputRef} name="itemName" {...itemName} />
      <label>Description:</label>
      <input name="itemDescription" {...itemDescription} />
      <button type="submit">Add Item</button>
    </form>
  );
}
