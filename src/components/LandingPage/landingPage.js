import React from "react";
import { FiChevronDown } from "react-icons/fi";
import "./landingPage.scss";

const LandingPage = () => {


  return (
    // main picture
    <div class="landing-page-container position-relative">
      <div class="main-picture">
        <figure>
          <img src="/images/banner/mainpic03.jpg" alt="InSense" />
        </figure>
      </div>
      <div class="landing-page-content position-absolute">
        <h1 class="slogan1">SENSE OF ELEGANCE</h1>
        <h1 class="slogan2">SENSE OF FRAGRANCE</h1>
        {/* discover more  */}
        <div class="discover d-flex flex-direction-column justify-content-center align-items-center">
          <p>Discover More</p>
          <p class="discover-arrow">
            <FiChevronDown className="discover-arrow" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
