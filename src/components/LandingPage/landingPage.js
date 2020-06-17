import React from "react";
import { FiChevronDown } from "react-icons/fi";
import "./landingPage.scss";
const LandingPage = () => {
    return (
        // main picture
        <div className="landing-page-container position-relative">
            <div className="main-picture">
                <figure>
                    <img src="/images/banner/mainpic03.jpg" alt="InSense" />
                </figure>
            </div>
            <div className="landing-page-content position-absolute">
                {/* <h1 className="logo">InSense</h1> */}
                <h1 className="slogan1">SENSE OF ELEGANCE</h1>
                <h1 className="slogan2">SENSE OF FRAGRANCE</h1>
                {/* discover more  */}
                <div className="discover d-flex flex-direction-column justify-content-center align-items-center">
                    <p>Discover More</p>
                    <p className="discover-arrow">
                        <FiChevronDown className="discover-arrow" />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
