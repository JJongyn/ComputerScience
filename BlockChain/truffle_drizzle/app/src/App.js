import React from "react";
import { DrizzleContext } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";
import drizzleOptions from "./drizzleOptions";
import MyComponent from "./MyComponent";
import "./App.css";

/*
const drizzleOptions = {
  contracts : [Greeter]
}*/

const App = () => {
  return (
    //<DrizzleContext.Provider options={drizzleOptions}>
    <div className="App">
      <h2>Hello World</h2>
    </div>
    //</DrizzleContext.Provider>
  );
}

export default App;
