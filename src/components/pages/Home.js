import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { Fade } from "react-awesome-reveal";

import "../../utilities.css"
import "./Home.css";

import TopBanner from "../modules/TopBanner.js";
import EventShortDes from "../modules/EventShortDes.js";
import Image from "../modules/Image.js";
import ContentBlock from "../modules/ContentBlock.js";

import TopBannerImage from "../../img/topbanner/eurovision.png";
import TermCard from "../../img/termcard_HT24.png";

// const axios = require("axios");

const Home = () => {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const BaseURL = "https://wcr.univ.ox.ac.uk/strapi/api"
    const response = await axios.get(`${BaseURL}/events?sort=startDate&pagination[pageSize]=100&populate=banner&populate=mainContact&populate=natures`);
    setEvents(response.data.data);
  };

  const catToColor = [
    {key: "College Official", bkgColor: "rgba(251,189,26,.3)"},
    {key: "Common Room", bkgColor: "rgba(91,206,250,.3)"},
    {key: "Student Society", bkgColor: "rgba(26,111,43,.3)"},
    {key: "Other", bkgColor: "rgb(170,170,170)"},
  ]

  useEffect(() => {getEvents();}, []);

  return (
    <>
      <TopBanner 
        backgroundImage={TopBannerImage} 
        bgColorKey="black" 
        title="Home" 
        content="Welcome to the University College WCR" />
      <ContentBlock title="The website grows with you!">
        <p>The WCR is finally having its website again since 2019, as a celebration of the end of Covid 
          and the revival of the postgraduate community of the University College, Oxford. The website is 
          under active development, and information available here may not be up-to-date. 
          You are strongly advised to double check with the <Link to="/governance">WCR members</Link>. The website may be down 
          from time to time for maintenance - we will try to inform you 48 hours before the 
          maintenance sessions. Feedbacks are welcomed: please share by 
          contacting <Link to="/profile/Samuel-CHLam">Samuel Chun Hei Lam</Link>, or attending the 
          open WCR committee meeting.
        </p>
      </ContentBlock>
      <ContentBlock title="Upcoming Events">
      <div>For more events, check out our <Link to="/whatson">What's on</Link> page or refer to the termcard below.</div>
        <div className="u-gridPic-3">
          {events.filter(
            (item) => new Date(item.attributes.startDate) > new Date()
            ).slice(0,3).map(
              (item) => {
                return (
                  <Image 
                    key={item.id}
                    title="" 
                    src={item.attributes.banner.data ? item.attributes.banner.data.attributes.url : ""}
                    opacity={item.attributes.banner.data ? 1 : .5}
                    isBlack={Boolean(true)}
                    aspect="16/9"
                    suppressArrow={Boolean(true)}
                    des={<EventShortDes attributes={item.attributes}/>}
                    desBkg={catToColor.find((obj) => {return obj.key === item.attributes.category}).bkgColor}
                    linkdes={`/events/${item.id}`}
                    isLocal={Boolean(true)}
                    altText={item.attributes.banner.data ? item.attributes.banner.data.attributes.alternativeText : ""}/>
                )}
            )}
        </div>
      </ContentBlock>
      <ContentBlock title="WCR Termcard">
        <div className="home-termcard-container">
          <img src={TermCard} style={{width: "100%"}} alt="Please refer to the what's on page for an accessible version of the list of events."/>
        </div>
      </ContentBlock>
    </>
  );
}

export default Home;
