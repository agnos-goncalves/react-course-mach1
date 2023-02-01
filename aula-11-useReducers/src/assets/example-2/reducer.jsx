export const initialState = {
  users: ["user 1", "user 2"],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADICIONAR":
      const usuarioNovo = action.payload;
      return {
        users: [...state.users, usuarioNovo],
      };
    case "REMOVER":
      const usuarioRemover = action.payload;
      const usuarios = state.users.filter((user) => user === usuarioRemover);
      return { users: usuarios };
    default:
      return state;
  }
}
export default reducer;
