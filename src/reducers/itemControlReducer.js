export function itemControlReducer(state, action) {
  console.log(action.type);
  if (action.type === "setSortTerm") {
    if (action.sortBy === state.sortBy) {
      return { sortBy: action.sortBy, ascending: !state.ascending };
    } else {
      return { sortBy: action.sortBy, ascending: true };
    }
  }
  throw Error("Unknown action: " + action.type);
}
