import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter} from "react-router";
import Router from "./routes/Router";
import './index.css'
import AuthProvider from "./Provider/AuthProvider";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
         <AuthProvider>
            <Router></Router>
         </AuthProvider>
  </BrowserRouter>
);
