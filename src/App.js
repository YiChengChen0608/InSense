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
import ItemDetails from "./pages/ItemDetails/itemDetails";
import ClassPage from "./pages/ClassPage/classPage";
import ClassList from "./pages/ClassList/classList";
import Registration from "./pages/Registration/registration";
import Modify from "./pages/Modify/modify";
import SignIn from "./pages/SignIn/SignIn";
import FaqAccordion from "./components/FaqAccordion/FaqAccordion";

function App() {
    return (
        <Router>
            <>
                <Nav />
                <MainContent>
                    <Switch>
                        <Route path="/classlist">
                            <ClassList />
                        </Route>
                        <Route path="/FaqAccordion">
                            <FaqAccordion />
                        </Route>
                        <Route path="/itemlist">
                            <Route path="/itemlist/:brandOrCategory/:Name">
                                <ItemList />
                            </Route>
                        </Route>
                        <Route path="/itemdetail/:itemid?">
                            <ItemDetails />
                        </Route>
                        <Route path="/classdetail/:classid">
                            <ClassDetail />
                        </Route>
                        <Route path="/signIn">
                            <SignIn />
                        </Route>
                        <Route path="/account">
                            <Route path="/account/classpage">
                                <ClassPage />
                            </Route>
                            <Route path="/account/registration">
                                <Registration />
                            </Route>
                            <Route path="/account/modify">
                                <Modify />
                            </Route>
                        </Route>
                        <Route path="/">
                            <IndexPage />
                        </Route>
                    </Switch>
                </MainContent>
                <Footer />
            </>
        </Router>
    );
}

export default App;
