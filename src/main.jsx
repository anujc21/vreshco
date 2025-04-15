import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import App from "./App.jsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

ReactDOM.createRoot(document.querySelector("#root")).render(<Router><App/></Router>);