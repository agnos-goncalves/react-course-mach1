export const initialState = [
  {
    name: "joao",
    lastName: "luiz",
    fullName: "joao luiz",
  },
];

export function CounterReducer(state, action) {
  switch (action.type) {
    case "USER_ADD":
      const user = {
        name: action.payload.name,
        lastName: action.payload.lastName,
        fullName: `${action.payload.name} ${action.payload.lastName}`,
      };
      return [...state, user];
    case "USER_REMOVE":
      const newArray = state.slice(0, state.length - 1);
      return newArray;
    default:
      return state;
  }
}

export default CounterReducer;
