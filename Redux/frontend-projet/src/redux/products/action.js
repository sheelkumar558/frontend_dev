export const storeData = (payload) => ({
  type: "STORE_DATA",
  payload,
});

export const handleLoading = () => ({
  type: "IS_LOADING",
});

export const handleError = () => ({
  type: "IS_ERROR",
});

export const getData = () => (dispatch) => {
  dispatch(handleLoading());
  fetch("http://localhost:8090/products")
    .then((res) => res.json())
    .then((res) => dispatch(storeData(res)))
    .catch(() => dispatch(handleError()));
};
