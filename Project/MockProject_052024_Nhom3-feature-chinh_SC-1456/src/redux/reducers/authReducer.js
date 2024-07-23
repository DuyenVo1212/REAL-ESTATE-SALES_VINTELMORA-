const initialState = {
  role: "customer",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ROLE":
      return {
        ...state,
        role: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
