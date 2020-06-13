import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "normalize.css";
import Nav from "./components/nav";
import Footer from "./components/footer";

import ItemList from "./pages/item/itemList";

function App() {
    return (
        <Router>
            <>
                <Nav />
                <Switch>
                    <Route path="/itemlist/:brand">
                        <ItemList />
                    </Route>
                </Switch>
                <Footer />
            </>
        </Router>
    );
}

export default App;
