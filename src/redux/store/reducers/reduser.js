const inishalState = {
  users: [],
};
export const reduser = (state = inishalState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      
      return { ...state, users: [...state.users, action.payload] };
    case "DELETE":
      return {
        ...state,
        users: [
          ...state.users
            .flat(Infinity)
            .filter((item) => item.id !== action.payload),
        ],
      };
    default:
      return state;
  }
};
