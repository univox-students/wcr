import React, {useState, useEffect} from "react";
// import { Fade } from "react-awesome-reveal";

import axios from "axios";
import ContentBlock from "../../modules/ContentBlock.js";
import Image from "../../modules/Image.js";
import TopBanner from "../../modules/TopBanner.js";
import EventShortDes from "../../modules/EventShortDes.js";

import "../../../utilities.css"
import "./WhatsOn.css";
import "../NotFound.css";

const WhatsOn = () => {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const BaseURL = "https://samuelchlam.herokuapp.com/api"
    const response = await axios.get(`${BaseURL}/events?sort=startDate&pagination[pageSize]=200&populate=banner&populate=mainContact&populate=natures`);
    setEvents(response.data.data);
  };

  useEffect(() => {getEvents();}, []);

  const catToColor = [
    {key: "College Official", bkgColor: "rgba(251,189,26,.3)"},
    {key: "Common Room", bkgColor: "rgba(91,206,250,.3)"},
    {key: "Student Society", bkgColor: "rgba(26,111,43,.3)"},
    {key: "Other", bkgColor: "rgb(170,170,170)"},
  ]

  return (
    <>
      <TopBanner title="What's On" content="List of Events" />
      <ContentBlock title="Events">
        <p>Please search below upcoming events happening in the college.</p>
        <div className="u-gridPic-3">
          {events.filter(
            (item) => new Date(item.attributes.startDate) > new Date()
            ).map(
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
    </>
  );
};
  
export default WhatsOn;
