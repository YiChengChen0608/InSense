import React from "react";
import "./errorPage.scss";

const ErrorPage = () => {
  return (
    <div class="bg-video">
      <video class="bg-video-content" autoPlay>
        <source
          src={"http://localhost:3000/images/video/chanel.mp4"}
          type="video/mp4"
        />
        <source
          src={"http://localhost:3000/images/video/chanel.webm"}
          type="video/webm"
        />
      </video>
      <div className="not-found">404</div>
      <div className="not-found-text">
        Oops, looks like something went wrong
      </div>
      {/* <button>返回首頁</button>
      <button>前往購買</button> */}
    </div>
  );
};

export default ErrorPage;
