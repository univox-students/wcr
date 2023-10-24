import React from "react";

import "../../../utilities.css"
import "./Welfare.css";

import TopBanner from "../../modules/TopBanner.js";
import ContentBlock from "../../modules/ContentBlock.js";

import TopBannerImage from "../../../img/topbanner/mcr_room.jpg";

const WhosWho = () => {
  return (
    <>
      <TopBanner backgroundImage={TopBannerImage} title="Welfare" content="Who's Who?" />

      <ContentBlock title="Content in progress">
        <p>The WCR is committed to contribute to your welfare during your time at the 
            University College. Managing your welfare means you are able to cope with all 
            aspects of your life, and make the most of your potential to play a full parts 
            in your community (WHO '18), hence also helping our graduate community to strive.
        </p>
      </ContentBlock>
    </>
  );
}

export default WhosWho;