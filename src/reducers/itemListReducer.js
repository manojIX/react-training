export function itemListReducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: action.id, name: action.name, description: action.description },
      ];
    case "remove":
      let newState = [...state];
      return newState.filter((item) => item.id !== action.id);
    default:
  }
  throw Error("Unknown action: " + action.type);
}
