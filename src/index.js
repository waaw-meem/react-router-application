import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { FavouriteContextProvider } from "./store/favourite-context";


ReactDOM.render(<FavouriteContextProvider><BrowserRouter><App/></BrowserRouter>
</FavouriteContextProvider>,document.querySelector("#root"))