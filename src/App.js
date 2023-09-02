import React, { useState } from "react";
import "./App.css";

function App() {
    const [theme, setTheme] = useState("light");

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <div className={theme === "light" ? "light" : "dark"} >
            <h1>Little Lemon 🍕</h1>
            <p className="para">ThemeProvider should render a context provider component and inject as the context value an object with two properties: a theme property that is a string, that can be either light or dark, and a function named toggleTheme that enables you to toggle the theme. The useTheme hook should return that context object.</p>
            <button className="btn" onClick={toggleTheme}>Toggle theme</button>
        </div>
    );
}

export default App;
