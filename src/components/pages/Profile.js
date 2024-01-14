import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

    const resUser = await axios.get(`https://samuelchlam.herokuapp.com/api/profiles?filters[username]=${userName}&populate=profilePicture`);
    const resEngage = await axios.get(`https://samuelchlam.herokuapp.com/api/univ-engagements?populate[user][fields][0]=username&filters[user][username][$eq]=${userName}`);

    // const resUser = await axios.get('http://localhost:1337/api/prev-comms').then(console.log("user")).catch(e => console.log(e));
    // const resEngage = await axios.get(`http://localhost:1337/api/univ-engagements?populate[prevComm][fields][0]=username&filters[prevComm][username][$eq]=Jacob-Ridley`).then(console.log("engage")).catch(e => console.log(e));
    
    console.log(resUser.data.data[0])

    setCurrentUser(resUser.data.data[0]);
    setCurrentEngage(resEngage.data.data);
    setIsLoading(false);
  };

  useEffect(() => {fetchUser();}, []);

  if (isLoading) {
    <>
      <TopBanner title="" content="Loading!" />
      <div className="u-block">Thank you for your patience.</div>
    </>
  }

  if (!currentUser || !currentEngage) {
    return (
      <>
        <TopBanner title="" content="This profile does not exist." />
        <div className="u-block">Please contact us for further assistance.</div>
      </>
    )
  }
  
  return (
    <>
      <ProfileBanner title="Profile" userObj={currentUser} bgColorKey="secondary" />
      <ContentBlock title="Univ Engagement">
        <div className="profile-engagement-container">
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
        </div>
      </ContentBlock>

      <ContentBlock title="Personal introduction">
        <Markdown>{currentUser.attributes.personalIntro}</Markdown>
      </ContentBlock>
    </>
  );
};

export default Profile;