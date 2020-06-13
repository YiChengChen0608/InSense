import React from "react";
import "normalize.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import ItemList from "./pages/item/itemList";

function App() {
    return (
        <>
            <Nav />
            <ItemList />
            <Footer />
        </>
    );
}

export default App;
