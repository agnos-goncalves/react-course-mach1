export const initialState = {
  counter: 0,
};

export function CounterReducer(state, action) {
  switch (action.type) {
    case "COUNTER_ADD":
      return { counter: state.counter + 1 };
    case "COUNTER_REMOVE":
      return { counter: state.counter - 1 };
    case "COUNTER_RESET":
      return { counter: 0 };
    default:
      return state;
  }
}

export default CounterReducer;
