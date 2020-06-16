import React from "react";
import "normalize.css";
import Nav from "./components/Nav/nav";
import Footer from "./components/Footer/footer";
import MainContent from "./components/mainContent";
import ItemList from "./pages/ItemList/itemList";

function App() {
    return (
        <>
            <Nav />
            <MainContent>
                <ItemList />
            </MainContent>
            <Footer />
        </>
    );
}

export default App;
