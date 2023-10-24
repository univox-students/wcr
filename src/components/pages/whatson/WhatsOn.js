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
