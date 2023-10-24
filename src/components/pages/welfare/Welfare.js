import React from "react";

import "../../../utilities.css"
import "./Welfare.css";

import TopBanner from "../../modules/TopBanner.js";
import ContentBlock from "../../modules/ContentBlock.js";
import Image from "../../modules/Image.js";
import ButtonFlex from "../../modules/ButtonFlex.js";

import TopBannerImage from "../../../img/topbanner/mcr_room.jpg";
import AllCommImage from "../../../img/topbanner/WCR_all_committee.jpg";
import EuroVisionImage from "../../../img/topbanner/eurovision.png";
import PeerSupporterImage from "../../../img/peerSupporterMT23.png";
import YogaImage from "../../../img/genericYoga.jpg";
import WelfareWeekImage from "../../../img/Welfare-Week-begins.jpg"

const Welfare = () => {
  return (
    <>
      <TopBanner backgroundImage={TopBannerImage} title="Welfare" content="Welfare" />

      <ContentBlock title="We believe in welfare!">
        <p>The WCR is committed to contribute to your welfare during your time at the 
            University College. Managing your welfare means you are able to cope with all 
            aspects of your life, and make the most of your potential to play a full parts 
            in your community (WHO '18), hence also helping our graduate community to strive.
        </p>
      </ContentBlock>

      <ContentBlock title="What do we offer?">
        <p>We believe that most problems are easier to manage at an earlier stage. Our 
          long-standing partnerships with the college, university and Student Union (SU) 
          enable us to proactively address your welfare concerns.
        </p>
        <h2>Who can I talk to?</h2>
        <p>Please do refer to our Welfare FAQ for specific concerns. In general, you are 
          encouraged to reach out to your college advisors, as well as any college 
          faculties/staff that are responsible to specific welfare issues. If you do not 
          feel comfortable to directly contacting the college, then please contact any 
          one of us below:
        </p>
        <div className="u-gridPic-2">
          <Image title="WCR Welfare committee members" 
                src={AllCommImage} 
                opacity={.5}
                isBlack={Boolean(true)}
                aspect="16/9"
                suppressArrow={Boolean(false)}
                des="The WCR welfare committee members, including the welfare officer and other representatives, could act as your first contact for your welfare concerns."
                linkdes="/governance"
                isLocal={Boolean(true)}
                altText="Photo of all WCR committees"/>
          <Image title="Peer supporters" 
                src={PeerSupporterImage}
                opacity={.5}
                isBlack={Boolean(true)}
                aspect="16/9"
                suppressArrow={Boolean(false)}
                des="They are well-trained students to address your specific welfare concerns."
                linkdes="https://intranet.univ.ox.ac.uk/sites/default/files/Peer%20Supporter%20poster%20MT23.pdf"
                isLocal={Boolean(false)}
                altText="Photo of all peer supporters"
                />
        </div>
        <ButtonFlex display={[
          {key: 1, isLocal: true, des: "Welfare FAQ", link: "/welfareFAQ"},
          {key: 2, isLocal: false, des: "Official welfare guide", link: "https://intranet.univ.ox.ac.uk/sites/default/files/Student%20Welfare%20Full%20Guide%2027%20Sept%202023.pdf"},
          {key: 3, isLocal: false, des: "Where to look for help?", link: "https://intranet.univ.ox.ac.uk/sites/default/files/Where%20to%20go%20for%20help%20leaflet%20MT2023.pdf"}
        ]}/>
      </ContentBlock>

      <ContentBlock title="Welfare activities">
        <p>The WCR regularly holds activities to help you to adopt your university life, 
          as well as to relax whenever you feel stressed with academic/life concerns.
        </p>
        <div className="u-gridPic-3">
          <Image title="Welfare week" 
                src={WelfareWeekImage}
                opacity={.5}
                isBlack={Boolean(true)}
                aspect="16/9"
                suppressArrow={Boolean(false)}
                des="They are the 5th weeks during every term, when students suffered the 
                so called mid-term/5th week blue due to the academic stresses. Therefore, 
                the WCR and the college organise different activities during the week to 
                help you relax."
                linkdes="/whatson"
                isLocal={Boolean(true)}
                altText="Someone pouring coffee"/>
          <Image title="Yoga sessions" 
                src={YogaImage}
                opacity={.5}
                isBlack={Boolean(true)}
                aspect="16/9"
                suppressArrow={Boolean(false)}
                des="We have the weekly Yoga sessions, guided by the professionals, to 
                help you relax by enjoying Yoga."
                linkdes="#"
                isLocal={Boolean(true)}
                altText="Photo of Yoga"
                />
          <Image title="Weekly socials" 
                src={EuroVisionImage}
                opacity={.5}
                isBlack={Boolean(true)}
                aspect="16/9"
                suppressArrow={Boolean(false)}
                des="The weekly social is an excellent opportunity for you to connect 
                with your graduates and enjoy some delicious wine and cheese."
                linkdes="#"
                isLocal={Boolean(true)}
                altText="Photo of WCR members watching eurovision"
                />
        </div>
      </ContentBlock>
    </>
  );
}

export default Welfare;