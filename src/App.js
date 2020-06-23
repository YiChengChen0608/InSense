import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "normalize.css";

//模板
import Nav from "./components/Nav/nav";
import Footer from "./components/Footer/footer";
import MainContent from "./components/mainContent";

//內頁
import IndexPage from "./pages/indexPage";
import ClassDetail from "./pages/classDetail";
import ItemList from "./pages/ItemList/itemList";
import ClassPage from "./pages/ClassPage/classPage";
import ClassList from "./pages/ClassList/classList";
import Registration from "./pages/Registration/registration";
import SignIn from "./pages/SignIn/SignIn";
import FaqAccordion from "./components/FaqAccordion/FaqAccordion";



function App() {
  return (
    <Router>
      <>
        <FaqAccordion />
        <Footer />
      </>
    </Router>
  );
}

export default App;
