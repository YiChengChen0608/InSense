import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "normalize.css";


import FaqAccordion from "./components/FaqAccordion/FaqAccordion"

function App() {
    return (
        <Router>
            <>
            
            <FaqAccordion />
            

            </>
        </Router>
    );
}

export default App;
