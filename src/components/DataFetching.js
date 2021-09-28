import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  err: "",
  post: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH__SUCCESS":
      return { loading: false, err: "", post: action.payload };
    case "FETCH__ERROR":
      return { loading: false, post: {}, err: "Something Went Wrong" };
    default:
      return state;
  }
};

function DataFetching() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/posts/1";
    const fetch = async () => {
      try {
        const response = await axios.get(URL);

        dispatch({ type: "FETCH__SUCCESS", payload: response.data });
      } catch (error) {
        console.log("fetching");
        dispatch({ type: "FETCH__ERROR" });
      }
    };
    fetch();
  }, []);
  return (
    <div>
      {state.loading ? "Loading" : state.post.title}
      {state.err ? state.err : null}
    </div>
  );
}

export default DataFetching;
