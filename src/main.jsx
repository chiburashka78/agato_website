/**
 * main.jsx
 *
 * Entry point for the Agato React application.
 *
 * Purpose:
 * --------
 * Initializes React and mounts the application into the root HTML
 * element defined in index.html.
 *
 * This module also provides application-wide dependencies that need
 * to wrap the entire React component tree:
 *
 * - React.StrictMode
 * - BrowserRouter
 * - Global CSS
 *
 * Application startup flow:
 * -------------------------
 *
 * index.html
 *     ↓
 * <div id="root"></div>
 *     ↓
 * main.jsx
 *     ↓
 * React.StrictMode
 *     ↓
 * BrowserRouter
 *     ↓
 * App.jsx
 *     ↓
 * Layout / Routes / Pages
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./styles/global.css";


/**
 * Locate the root HTML element where the React application
 * will be mounted.
 */
const rootElement = document.getElementById("root");


/**
 * Create the React root and render the application.
 */
ReactDOM
    .createRoot(rootElement)
    .render(
        <React.StrictMode>

            <BrowserRouter>
                <App />
            </BrowserRouter>

        </React.StrictMode>
    );