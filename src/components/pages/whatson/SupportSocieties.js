import React from "react";
import { Link } from "react-router-dom";
// import { Fade } from "react-awesome-reveal";

import "../../../utilities.css"
import "./SocietyAZ.css";

import TopBanner from "../../modules/TopBanner.js";
import ContentBlock from "../../modules/ContentBlock.js";
import ButtonFlex from "../../modules/ButtonFlex.js";

const SupportSocieties = () => {

  return (<>
    <TopBanner title="What's On" content="Supports for college societies" />

    <ContentBlock title="Introduction">
      <p>Thank you for your interests in setting up a new society for Univ. Your 
        initative would make our community more vibrant and diverse!</p>
      <p>Societies are not required to register to college or any common rooms. However, 
        the WCR is here to support you in various ways together with the college.</p>
    </ContentBlock>
    <ContentBlock title="IMPORTANT: Room Booking Regulation">
      <p>Make sure to abide with the room booking regulations if you wish to host event 
        within the college.</p>
      <h2>Step 1: Preliminary Contacts</h2>
      <p>Before submitting event registration (aka the "pink slip"), you should 
        first contact:</p>
      <ul>
        <li>the domestic bursary 
          at <a href="mailto:hospitality@univ.ox.ac.uk">hospitality@univ.ox.ac.uk</a> to 
        check availability of rooms and obtain a reference number,</li>
        <li>the <a href="https://www.univjcr.com/committee">JCR President</a> if you wish to book the JCR,</li>
        <li>the <Link to="/governance">WCR President</Link> if you wish to book the WCR, and/or</li>
        <li>your fellow housemates if you want to host your event in your accommodations.</li>
      </ul>
      <h2>Step 2:</h2>
      <p>  
        You should then complete the "pink slip" at 
        the <a href="https://intranet.univ.ox.ac.uk">college intranet</a>, abiding the 
        following deadlines: (last updated: Michaelmas 2023)</p>
      <ul>
        <li>10 full working days for events held in college bars</li>
        <li>3 full working days for events held in college meeting rooms</li>
        <li>48 hours for events held in accommodations</li>
      </ul>
      <p><b>You should also include details of external speaker in your application.</b> The 
        college reserves right to terminate any events that do not comply with the above 
        regulations. Organising or participating events without a pink slip may lead to 
        disciplinary actions.
      </p>
      <p><b>University clubs are not allowed to host events in the college unless booked by a college member 
        who is the president of the society. Event of such could not be advertised to general public.</b></p>
      <ButtonFlex display={[
          {key: 1, isLocal: false, des: "Latest room booking info", link: "https://intranet.univ.ox.ac.uk/sites/default/files/Pink%20Slip%20required%20information%2023-24%20-%2016%20Oct%2023.pdf"},
          {key: 2, isLocal: false, des: "Check room capacities", link: "https://intranet.univ.ox.ac.uk/sites/default/files/Maximum%20Room%20Capacities%20-%20Oct%202023.pdf"}
        ]}/>
    </ContentBlock>
    <ContentBlock title="Promotion on the WCR Website">
      <p>Any societies that are led by WCR members, or having sufficient involvement in WCR could 
        create a page in this WCR website for promotion. Please contact 
        the <Link to="/governance">external affairs officer</Link> or 
        email <a href="mailto:wcr.externalaffairs@univ.ox.ac.uk">wcr.externalaffairs@univ.ox.ac.uk</a> if 
        you wish to do so. Please include the following details:
      </p>
      <ul>
        <li>Name of your society</li>
        <li>A logo/picture representing your society (ideally of the dimension 16:9)</li>
        <li>Points of contact (one of them must be a Univ member, ideally from WCR)</li>
        <li>Description of your society</li>
        <li>Schedule of regular meetings (if any)</li>
        <li>Nature of society: academic, music, sports, social, other</li>
        <li>Links of promotion: website, Facebook, Instagram, Twitter, WhatsApp group</li>
      </ul>
      <p>The JCR also has an independent listing of the website. You can enquire by contacting 
        the <Link to="/governance">external affairs officer</Link> or 
        email <a href="mailto:wcr.externalaffairs@univ.ox.ac.uk">wcr.externalaffairs@univ.ox.ac.uk</a> for more information.</p>
    </ContentBlock>
    <ContentBlock title="WCR Funding">
      <p>Any societies that are led by WCR members, or having sufficient involvement in WCR could apply funding from WCR. Please contact 
        the <Link to="/governance">Treasurer</Link> <b>separately</b> for information. Applications of funding 
        will be discussed during a WCR committee meeting.
      </p>
    </ContentBlock>
    {/* </Fade> */}
    </>
  );
}

export default SupportSocieties;