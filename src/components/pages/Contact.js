import React from "react";
// import { Fade } from "react-awesome-reveal";

import "../../utilities.css"
import "./Contact.css";

import TopBanner from "../modules/TopBanner.js";
import ContentBlock from "../modules/ContentBlock.js";

const Contact = () => {
  return (
    <>
    <TopBanner bgColorKey="secondary" title="Contact" content="Contact Us" />
    {/* <Fade direction="up" triggerOnce> */}
    <ContentBlock title="Emails">
      <p>Please contact us by one of the following emails:</p>
      <ul>
        <li>President: <a href="mailto:wcr.president@univ.ox.ac.uk">wcr.president@univ.ox.ac.uk</a></li>
        <li>Vice-president / Treasurer: <a href="mailto:wcr.treasurer@univ.ox.ac.uk">wcr.treasurer@univ.ox.ac.uk</a> or <a href="mailto:mcr.vpresident@univ.ox.ac.uk">mcr.vpresident@univ.ox.ac.uk</a></li>
        <li>Secretary: <a href="mailto:wcr.secretary@univ.ox.ac.uk">wcr.secretary@univ.ox.ac.uk</a></li>
        <li>Welfare Officer: <a href="mailto:wcr.welfare@univ.ox.ac.uk">wcr.welfare@univ.ox.ac.uk</a></li>
        <li>Entertainment (Social officer): <a href="mailto:wcr.entertainment@univ.ox.ac.uk">wcr.entertainment@univ.ox.ac.uk</a></li>
        <li>LGBTQ+: <a href="mailto:wcr.lgbtq@univ.ox.ac.uk">wcr.lgbtq@univ.ox.ac.uk</a></li>
        <li>International: <a href="mailto:wcr.international@univ.ox.ac.uk">wcr.international@univ.ox.ac.uk</a></li>
        <li>Equality and Access: <a href="mailto:wcr.equality@univ.ox.ac.uk">wcr.equality@univ.ox.ac.uk</a></li>
        <li>External Affairs / IT: <a href="mailto:wcr.externalaffairs@univ.ox.ac.uk">wcr.externalaffairs@univ.ox.ac.uk</a></li>
      </ul>
    </ContentBlock>
    <ContentBlock title="Other contacts">
      <p>Join our <a href="https://www.facebook.com/groups/1233897143993080">Facebook group</a>.</p>
    </ContentBlock>
    {/* </Fade> */}
    </>
  );
};

export default Contact;
  