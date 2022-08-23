import * as React from 'react'
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

//HashRouter for github-pages (BrowserRouter - preferable)
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);