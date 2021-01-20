import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(reducers, {});

const Root = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Root;