import React from "react";
import "normalize.css";
import Nav from "./components/nav";
import ClassCard from "./components/class/classCard";
import classImg from "./images/class1.jpg";
import Footer from "./components/footer";

function App() {
    return (
        <>
            <Nav />
            <ClassCard
                src={classImg}
                date={"2020/12/31"}
                className={"LFP 客製化香水課程預約"}
            />
            <Footer />
        </>
    );
}

export default App;
