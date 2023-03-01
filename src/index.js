import App from "./App";
import React from "react";
import ReactDom from "react-dom/client";



const rootElement = document.getElementById("root");
const root = ReactDom.createRoot(rootElement);
root.render(<App/>);