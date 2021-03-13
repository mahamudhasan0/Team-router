import React, { useState } from "react";
import "../TeamDetails/TeamDetails.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPodcast,
  faFlag,
  faFutbol,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";

const TeamDetails = () => {
  const value = JSON.parse(localStorage.getItem("team"));
  const [singleteam, setSingleteam] = useState(value);
  console.log(singleteam, setSingleteam);
  return (
    <div className="singleitem">
      <img
        src={singleteam.imageThumb.strStadiumThumb}
        alt=""
        className="thumbImg"
      />

      <img src={singleteam.logo.strTeamBadge} alt="" className="badgeImg" />
      <div className="banner_info">
        <div>
          <p className="banner_paragraph">
            Club Name:{singleteam.team.strTeam}
          </p>

          <p className="banner_paragraph">
            <FontAwesomeIcon icon={faPodcast} />
            Founded: {singleteam.formedYear.intFormedYear}
          </p>

          <p className="banner_paragraph">
            <FontAwesomeIcon icon={faFlag} />
            Country: {singleteam.country.strCountry}
          </p>

          <p className="banner_paragraph">
            <FontAwesomeIcon icon={faFutbol} />
            Sport Type: {singleteam.type.strSport}
          </p>

          <p className="banner_paragraph">
            <FontAwesomeIcon icon={faVenus} />
            Gender: {singleteam.gender.strGender}
          </p>
        </div>

        {singleteam.gender.strGender === "Male" ? (
          <img
            src={singleteam.groupImg.strTeamFanart2}
            alt=""
            className="groupimg"
          />
        ) : (
          "Female Photo"
          // I have no female club in my api thats why i am using "female photo" also i had no group image in this api thats why i am using strTeamFanart2 fanart value
        )}
      </div>

      <p className="lorem">{singleteam.discription.strStadiumDescription}</p>

      <div>
        <Link to={singleteam.facebook.strFacebook}>
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link to={singleteam.twitter.strTwitter}>
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
        <Link to={singleteam.instagram.strInstagram}>
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
      </div>
    </div>
  );
};

export default TeamDetails;
