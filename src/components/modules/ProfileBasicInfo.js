import React from "react";

import "../../utilities.css";
import "./ProfileBasicInfo.css";

/**
 * Profile Left is a component in profile displaying personal detail
 * of a user.
 *
 * Proptypes
 * @param userObj for user object
 */

import default_img_src from "../../img/logo/univ_192x192.png";

const ProfileBasicInfo = ( {userObj} ) => {
  return (
        <div>
            <div style={
              {backgroundImage: `url(${userObj.attributes.profilePicture.data.attributes.url})`}} 
              className="u-image u-aspect-43" 
              title={userObj.attributes.profilePicture.data.attributes.alternativeText}> </div>
            <div className="profilebasicinfo-basic">
                <p>Current Role <br/> <b>{userObj.attributes.wcrRole}</b> <br/> <b>{userObj.attributes.wcrCommitteeRole}</b></p>
                <p>Subject <br/> <b>{userObj.attributes.subject}</b></p>
                <p>Joined Univ Since <br/><b>{userObj.attributes.joinedUnivSince}</b></p>
                <p>
                  <a href={`mailto:${userObj.attributes.email}`}><i className="fa-solid fa-envelope fa-3x"></i></a>
                  {userObj.univIntroLink && (<a href={userObj.univIntroLink}><img src={default_img_src} style={{width: 40, margin: 0, padding: 0}} alt="martlet"/></a>)}
                  {userObj.websiteLink && (<a href={userObj.websiteLink}><i className="fa-solid fa-globe fa-3x"></i></a>)}
                </p>
            </div>
        </div>
    );
  }

export default ProfileBasicInfo;