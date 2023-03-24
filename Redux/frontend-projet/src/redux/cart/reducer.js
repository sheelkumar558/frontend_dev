const initState = {
  loading: false,
  error: false,
  products: [],
  currentProduct: {},
};

export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case "CURRENT_LOADING":
      return { ...state, loading: true };
    case "CURRENT_ERROR":
      return { ...state, loading: false, error: true };
    case "CURRENT_DATA":
      return {
        ...state,
        loading: false,
        error: false,
        currentProduct: action.payload,
      };
    default:
      return state;
  }
};
