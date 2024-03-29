import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Markdown from "react-markdown";

import "../../utilities.css"
import "./Profile.css";

import TopBanner from "../modules/TopBanner.js";
import ProfileBanner from "../modules/ProfileBanner.js";
import ContentBlock from "../modules/ContentBlock.js";

const Profile = () => {
  let { userName } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [currentEngage, setCurrentEngage] = useState();

  const fetchUser = async () => {
    setIsLoading(true);

    const BaseURL = "https://wcr.univ.ox.ac.uk/strapi/api";
    const resUser = await axios.get(`${BaseURL}/profiles?filters[username]=${userName}&populate=profilePicture`);
    const resEngage = await axios.get(`${BaseURL}/univ-engagements?populate[user][fields][0]=username&filters[profile][username][$eq]=${userName}`);

    setCurrentUser(resUser.data.data[0]);
    setCurrentEngage(resEngage.data.data);
    setIsLoading(false);
  };

  useEffect(() => {fetchUser();}, []);

  if (isLoading) {
    <>
      <TopBanner title="" content="Loading!" />
      <section className="u-block">Thank you for your patience.</section>
    </>
  }

  if (!currentUser || !currentEngage) {
    return (
      <>
        <TopBanner title="" content="This profile does not exist." />
        <ContentBlock title="Please wait patiently as the website loads">
          <section>
            Please <Link to="/contact">contact us</Link> if the problem still persist.
          </section>
        </ContentBlock>
      </>
    )
  }
  
  return (
    <>
      <ProfileBanner title="Profile" userObj={currentUser} bgColorKey="secondary" />
      <ContentBlock title="Univ Engagement">
        <section className="profile-engagement-container">
          {currentEngage.sort((item1, item2) => {return (item2.attributes.startDate > item1.attributes.startDate)}).map((item, idx) => {
            const startYear = new Date(item.attributes.startDate);
            const endYear = item.attributes.endDate ? new Date(item.attributes.endDate) : "";

            return (
              <div key={idx} className="profile-engagement"> 
                {item.attributes.name}, {item.attributes.organisation} {startYear.getFullYear()}-
                {endYear ? (<>{endYear.getFullYear()}</>) : (<></>)}</div>
                );
              }
            )
          }
        </section>
      </ContentBlock>

      <ContentBlock title="Personal introduction">
        <section className="profile-intro">
          <Markdown>{currentUser.attributes.personalIntro}</Markdown>
        </section>
      </ContentBlock>
    </>
  );
};

export default Profile;