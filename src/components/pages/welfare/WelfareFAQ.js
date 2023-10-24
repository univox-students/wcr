import React, {useState} from "react";

import "../../../utilities.css"
import "./WelfareFAQ.css";

import TopBanner from "../../modules/TopBanner.js";
import ContentBlock from "../../modules/ContentBlock.js";
import emergencyConcerns from "../../../data/emergencyConcerns.js";
import ButtonFlex from "../../modules/ButtonFlex.js";

import TopBannerImage from "../../../img/topbanner/mcr_room.jpg";

const WelfareFAQ = () => {
  const [emerItem, setEmerItem] = useState("General Emergency");
  const emergencyConcern = emergencyConcerns.find((item) => item.name === emerItem);

  return (
    <>
      <TopBanner backgroundImage={TopBannerImage} title="Welfare" content="Welfare FAQ" />

      <ContentBlock title="Who can I get in touch?">
        <p>We believe that most problems are easier to manage at an earlier stage. Our 
          long-standing partnerships with the college, university and Student Union (SU) 
          enable us to proactively address your welfare concerns. We classify the contacts 
          into three categories:
        </p>
        <div className="u-gridPic-3">
          <div className="u-alert-green">
            <h3>Stage 1: College level</h3>
            <p className="u-nomargin">The college faculties, staff and the common rooms 
            form a strong supporting network to address your welfare concerns. The WCR 
            Welfare committee members and the Peer Supporters could act as your first 
            point of contact, if you do not wish to contact the college faculties/staff.</p>
          </div>
          <div className="u-alert-yellow">
            <h3>Stage 2: University level</h3>
            <p className="u-nomargin">Both the University governance and the Student 
            Union (SU) provide welfare supports, should the college fails to address 
            your welfare concerns.</p>
          </div>
          <div className="u-alert-red">
            <h3>Stage 3: Independent supports</h3>
            <p className="u-nomargin">This is when it is more appropriate for you to seek supports independent from 
                the University.</p>
          </div>
        </div>
      </ContentBlock>

      <ContentBlock title="Emergency Concerns">
        <p>We are sorry to hear that you are experiencing emergency situation. It is 
            important for you to act swiftly. Please click on one of the following tabs 
            for contact information.</p>
        <ul className="welfarefaq-emergency-menu-container">
          {emergencyConcerns.map((item, key) => {

            let emergencyButtonBkdColor = "#fbbd1a"
            if (item.name !== emerItem) {
              emergencyButtonBkdColor = "#fff3cd"
            }

            return (
            <li className="welfarefaq-emergency-menu-item">
              <button 
                style={{backgroundColor: emergencyButtonBkdColor}} 
                onClick={() => {setEmerItem(item.name)}}>
                  {item.name}     
              </button>
            </li>)
          })}
        </ul>
        <div style={{marginTop: 16}}>
          {emergencyConcern.description}
        </div>
        <div className="u-gridPic-3">
          <div className="u-alert-green">
            <h3>Stage 1: College level</h3>
            <ul>
              {emergencyConcern.stageOne.map((contact, key) => {return (<li>{contact}</li>)})}
            </ul>
          </div>
          <div className="u-alert-yellow">
            <h3>Stage 2: University level</h3>
            <ul>
              {emergencyConcern.stageTwo.map((contact, key) => {return (<li>{contact}</li>)})}
            </ul>
          </div>
          <div className="u-alert-red">
            <h3>Stage 3: Independent supports</h3>
            <ul>
              {emergencyConcern.stageThree.map((contact, key) => {return (<li>{contact}</li>)})}
            </ul>
          </div>
        </div>
      </ContentBlock>

      <ContentBlock title="Non-emergency concerns">
        <p>We are still working on the content. Please refer to the welfare guides for information.</p>
        <ButtonFlex display={[
          {key: 1, isLocal: true, des: "Return to welfare page", link: "/welfare"},
          {key: 2, isLocal: false, des: "Official welfare guide", link: "https://intranet.univ.ox.ac.uk/sites/default/files/Student%20Welfare%20Full%20Guide%2027%20Sept%202023.pdf"},
          {key: 3, isLocal: false, des: "Where to look for help?", link: "https://intranet.univ.ox.ac.uk/sites/default/files/Where%20to%20go%20for%20help%20leaflet%20MT2023.pdf"}
        ]}/>
      </ContentBlock>
    </>
  );
}

export default WelfareFAQ;