import React, { useReducer } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";
import ComponentF from "./ComponentF";
import "../styles/main.scss";
import DataFetching from "./DataFetching";
import { useGlobalContext } from "./Context";

const App = () => {
  const { count } = useGlobalContext();
  return (
    <div className="app">
      =*Count {count}*=
      <ComponentA />
      <ComponentB />
      <ComponentF />
      <DataFetching />
    </div>
  );
};
export default App;
