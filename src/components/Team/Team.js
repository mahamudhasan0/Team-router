import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Team.css";

const Team = () => {
  const [league, setLeague] = useState([]);
  useEffect(() => {
    const url =
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setLeague(data.teams));
  }, []);
  console.log(league);

  const history = useHistory();

  const handleClick = (
    strTeam,
    strSport,
    strTeamBadge,
    strStadiumThumb,
    strGender,
    strTeamFanart2,
    intFormedYear,
    strCountry,
    strStadiumDescription,
    strTwitter,
    strFacebook,
    strInstagram,
    strYoutube
  ) => {
    history.push(`/singleTeam/${strTeam}`);
    const initval = {
      team: { strTeam },
      logo: { strTeamBadge },
      type: { strSport },
      country: { strCountry },
      formedYear: { intFormedYear },
      gender: { strGender },
      imageThumb: { strStadiumThumb },
      groupImg: { strTeamFanart2 },
      discription: { strStadiumDescription },
      twitter: { strTwitter },
      facebook: { strFacebook },
      instagram: { strInstagram },
      youtube: { strYoutube },
    };
    localStorage.setItem("team", JSON.stringify(initval));
    window.location.reload();
    console.log(initval);
  };

  return (
    <div className="team">
      <img
        src="https://www.thesportsdb.com/images/media/team/stadium/qtwvus1420231540.jpg"
        alt=""
      />
      <span className="dream">Dream League</span>
      {league.map((item) => {
        const {
          strTeamBadge,
          strTeam,
          strSport,
          strStadiumThumb,
          strGender,
          intFormedYear,
          strCountry,
          strTeamFanart2,
          strStadiumDescription,
          strTwitter,
          strFacebook,
          strInstagram,
          strYoutube,
        } = item;
        return (
          <div key={strTeam} className="card">
            <img src={strTeamBadge} alt="" />
            <p>{strTeam}</p>
            <p>Sports Type: {strSport}</p>
            <button
              onClick={() =>
                handleClick(
                  strTeam,
                  strSport,
                  strTeamBadge,
                  strStadiumThumb,
                  strGender,
                  strTeamFanart2,
                  intFormedYear,
                  strCountry,
                  strStadiumDescription,
                  strTwitter,
                  strFacebook,
                  strInstagram,
                  strYoutube
                )
              }
            >
              Details
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Team;
