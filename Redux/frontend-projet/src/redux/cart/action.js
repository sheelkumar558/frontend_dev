export const storeCurrentData = (payload) => ({
  type: "CURRENT_DATA",
  payload,
});

export const handleCurrentLoading = () => ({
  type: "CURRENT_LOADING",
});

export const handleCurrentError = () => ({
  type: "CURRENT_ERROR",
});

export const getCurrentData = (id) => (dispatch) => {
  dispatch(handleCurrentLoading());
  fetch(`http://localhost:8090/products/${id}`)
    .then((res) => res.json())
    .then((res) => dispatch(storeCurrentData(res)))
    .catch(() => dispatch(handleCurrentError()));
};
