import React from "react";
// import { Fade } from "react-awesome-reveal";

import "../../../utilities.css"
import "./SocietyAZ.css";
// import TopBannerImage from "../../img/topbanner/WCR_all_committee.jpg";
import roomBooking from "../../../data/pinkSlip.pdf"

import TopBanner from "../../modules/TopBanner.js";
import ContentBlock from "../../modules/ContentBlock.js";
import AllSocieties from "../../modules/AllSocieties.js";
import ButtonFlex from "../../modules/ButtonFlex.js";

const SocietyAZ = () => {

  return (<>
    <TopBanner title="What's On" content="Societies" />

    {/* <Fade cascade={true} direction="up" triggerOnce> */}
    <ContentBlock title="Societies">
      <p>At Univ, there are many student college societies run for members of the college to 
        fulfil many different potential interests. The societies are sometimes run soley 
        by WCR members, or jointly with JCR. If you have an interest in joining 
        any of these societies, you can get in touch with the listed contact for the 
        society of interest and find out how you can get involved. You can also join other 
        university societies as well.</p>
        <ButtonFlex display={[
          {key: 1, isLocal: true, des: "Create a college society!", link: "/societies-supports"},
          {key: 2, isLocal: false, des: "Room booking info", link: "https://intranet.univ.ox.ac.uk/sites/default/files/Pink%20Slip%20required%20information%2023-24%20-%2016%20Oct%2023.pdf"},
          {key: 3, isLocal: false, des: "Check room capacities", link: "https://intranet.univ.ox.ac.uk/sites/default/files/Maximum%20Room%20Capacities%20-%20Oct%202023.pdf"}
        ]}/>
    </ContentBlock>
    <ContentBlock title="Societies A to Z">
      <p>Please browse below the list of college societies available for postgraduates. 
        The list is incomplete, and does not include undergraduate societies. See above for 
        registering your societies in our listings.</p>
        <AllSocieties />
    </ContentBlock>
    {/* </Fade> */}
    </>
  );
}

export default SocietyAZ;