export const getFetchResponse = () => {
  return async function (dispatch) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();

      dispatch({ type: "ADD_ITEM", payload: result });
      return response;
    } catch (error) {
      console.log(error.message);
    }
  };
};

export default getFetchResponse;
