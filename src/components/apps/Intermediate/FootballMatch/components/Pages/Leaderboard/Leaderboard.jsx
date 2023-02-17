import TeamPosition from "../../utility/TeamPosition/TeamPosition";
import LeagueService from "../../../services/LeagueService";
import React, { useEffect, useState } from "react";
// import Logo from "/Images/logo.svg";
import SpinnerComp from "../../utility/Spinner/Spinner";
import HeadingComponent from "../../utility/Heading/Heading";
import FootballApp from "../../../FootballApp";

function Leaderboard() {
  const League = new LeagueService([]);
  const [leaderList, setLeaderList] = useState([]);
  const [inProgress, setInProgress] = useState(false);

  useEffect(() => {
    setInProgress((i) => !i);
    League.fetchData().then(() => {
      setLeaderList(League.getLeaderboard());
      setInProgress((i) => !i);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FootballApp>
      <HeadingComponent mainHead={"League Standings"} />
      {inProgress ? (
        <div className="align-middle text-center">
          <SpinnerComp />
        </div>
      ) : (
        <TeamPosition leaderList={leaderList} />
      )}
    </FootballApp>
  );
}

export default Leaderboard;
