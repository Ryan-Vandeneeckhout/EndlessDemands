import "./BottomSiteSectionContainer.scss";
import React from "react";
import BottomOfSiteFrom from "./BottomSiteForm";

const BottomSiteSectionContainer = () => {
  return (
    <section className="bottomSite">
      
      <div className="bottomSite-Wrapper">
        <div className="bottomSiteWebsiteTitleContainer">
          <h2>Endless Demands</h2>
        </div>
        <div className="contactWrapper">
          <BottomOfSiteFrom />
          <div className="contactMethods">
            <h3>Get in Touch</h3>
            <p>
              Hello there, feel free to contact me regarding my projects, code or invite me
              to any future opportunities that you think could benefit from my
              skillset or input. Thank you dear viewer for visiting my site
              Endless Demands and I hope to hear from you soon about any amazing
              opportunities. Thank you.
            </p>
            <div className="iconlListWrapper">
              <a aria-label='Link to Ryan Van Den Eeckhout`s Linkedin Profile' href="https://www.linkedin.com/in/ryanvandeneeckhout/"><i className="fab fa-linkedin"/></a>
              <a aria-label='Link to Ryan Van Den Eeckhout`s Github Profile' href="https://github.com/Ryan-Vandeneeckhout"><i className="fab fa-github-square"/></a>
              <a aria-label='Link to Ryan Van Den Eeckhout`s Twitter Profile' href="https://twitter.com/Traitor_Legion"><i className="fab fa-twitter-square"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="credits">
        <p>Created by Ryan Van Den Eeckhout</p>
      </div>
    </section>
  );
};

export default BottomSiteSectionContainer;
