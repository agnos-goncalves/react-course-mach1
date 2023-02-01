export const initialState = { count: 0 };
export const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENTAR":
      return { count: state.count + 1 };
    case "DECREMENTAR":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};
export default reducer;
