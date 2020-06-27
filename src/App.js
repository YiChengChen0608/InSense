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
import OrderDetail from './pages/OrderDetail/orderDetail';
import ClassPage from "./pages/ClassPage/classPage";
import ClassList from "./pages/ClassList/classList";
import Registration from "./pages/Registration/registration";
import TestUI from "./pages/TestUI/testUI";
import ShopPage from './pages/shop/shop.component';
// import SignIn from "./pages/SignIn/SignIn";
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
            <Route path="/itemdetail/:itemId?">
              <ItemDetails />
            </Route>
            <Route path="/orderdetail">
              <OrderDetail />
            </Route>
            <Route path="/classdetail/:classid">
              <ClassDetail />
            </Route>
            <Route path="/testUI">
              <TestUI />
            </Route>
            <Route path="/Shop">
              <ShopPage />
            </Route>
            <Route path="/account">
              <Route path="/account/classpage">
                <ClassPage />
              </Route>
              <Route path="/account/registration">
                <Registration />
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
