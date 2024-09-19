import { useReducer } from "react";
import { useState } from "react";
import { taskControlReducer } from "../reducers/taskControlReducer";

export function useItemManager(initialItems) {
  let items = initialItems;

  const [filter, setFilter] = useState("");
  const [sortCriteria, taskControlDipatcher] = useReducer(taskControlReducer, {
    sortBy: null,
    ascending: false,
  });

  const setSortTerm = (sortBy) => {
    taskControlDipatcher({ type: "setSortTerm", sortBy });
  };

  let sortFunction = (a, b) => {
    const comparison = a[sortCriteria.sortBy] < b[sortCriteria.sortBy];
    switch (sortCriteria.ascending ? comparison : !comparison) {
      case true:
        return -1;
      case false:
        return 1;
      default:
    }
    return 0;
  };

  let orderedItems =
    sortCriteria.sortBy === null ? items : items.sort(sortFunction);

  const sortedAndFilteredItems =
    filter.length === 0
      ? orderedItems
      : orderedItems.filter((item) => item.description.includes(filter));

  return {
    sortedAndFilteredItems,
    setSortTerm,
    setFilter,
  };
}
