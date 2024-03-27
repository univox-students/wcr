import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Markdown from "react-markdown";
// import { Fade } from "react-awesome-reveal";

import SocietyBanner from "../../modules/SocietyBanner.js";
import ContentBlock from "../../modules/ContentBlock.js";

import "../../../utilities.css"
import "./Society.css";


const Society = () => {
  let {abbreviation} = useParams();

  const [society, setSociety] = useState({});

  const getSociety = async () => {
    const BaseURL = "https://wcr.univ.ox.ac.uk/strapi/api";
    const resSoc = await axios.get(`${BaseURL}/societies?filters[abbreviation][$eq]=${abbreviation}` + 
      "&populate[profiles][fields][0]=username&populate[profiles][fields][1]=preferredName" + 
      "&populate[banner][fields][0]=url"
      ).then().catch((e) => console.log(e));
    setSociety(resSoc.data.data[0].attributes);
  };

  useEffect(() => {getSociety();}, []);

  return (
    <>
      <SocietyBanner societyObj={society} />
      <ContentBlock title="Description">
        <Markdown>{society.description}</Markdown>
      </ContentBlock>
      <ContentBlock title="Meeting schedule for this term">
        <Markdown>{society.regularSchedule}</Markdown>
      </ContentBlock>
      <ContentBlock title="Contacts">
        <div className="u-gridPic-2">
          <div>
            <h2>MCR Contacts</h2>
            <ul>
              {society.profiles && society.profiles.data.map((item, idx) => <li key={idx}><Link to={`/profile/${item.attributes.username}`}>{item.attributes.preferredName}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2>Other Contacts</h2>
            <Markdown>{society.otherContacts}</Markdown>
          </div>
        </div>
      </ContentBlock>
    </>
  );
};
  
export default Society;
