import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../../utilities.css"
import "./CurrentComm.css";

import default_img_src from "../../img/logo/univ_192x192.png";

const CurrentCommittee = () => {

  const [currentComm, setCurrentComm] = useState([]);

  const fetchComm = async () => {
    const BaseURL = "https://wcr.univ.ox.ac.uk/strapi/api";
    const resCurrent = await axios.get(`${BaseURL}/profiles?filters[wcrRole]=Committee&populate[profilePicture][fields][0]=url`
      ).then().catch(e => {console.log(e)});

    setCurrentComm(resCurrent.data.data);
  };

  useEffect(() => {fetchComm();}, []);

  const scrollToTop = () => {
    setTimeout(
      function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }, 50)
  };

  return (
    <div className="CurrentComm-container">
        { /* sort(
          (comm1, comm2) => {return comm1.orderOfDisplay > comm2.orderOfDisplay}
        ) */
        currentComm.map(
          (comm) => { 
          let bG
          if (comm.attributes.profilePicture.data) {
            bG = `url("${comm.attributes.profilePicture.data.attributes.url}")`;
          } else {
            bG = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${default_img_src}")`;
          }

          return (
            <div key={comm.id} className="CurrentComm-single">
              <Link to={`/profile/${comm.attributes.username}`} onClick={scrollToTop}>
              <div className="CurrentComm-background" style={{backgroundImage: bG}}> </div>
              <div className="CurrentComm-about"> 
                  <div className="name"> <b>{comm.attributes.preferredName}</b> {comm.attributes.preferredPronoun && <>({comm.attributes.preferredPronoun})</>} </div>
                  <div className="post"> {comm.attributes.wcrCommitteeRole} </div>
              </div>
              </Link>
            </div>
          )
        })}
    </div>
  );
};
  
export default CurrentCommittee;