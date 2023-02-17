import MatchSchedule from "../../utility/MatchSchedule/MatchSchedule";
import LeagueService from "../../../services/LeagueService";
import React, { useEffect, useState } from "react";
// import Logo from "/Images/logo.svg";
import HeadingComponent from "../../utility/Heading/Heading";
import SpinnerComp from "../../utility/Spinner/Spinner";
import FootballApp from '../../../FootballApp';

function NavScrollExample() {
  const League = new LeagueService([]);
  const [matches, setMatches] = useState([]);
  const [inProgress, setInProgress] = useState(false);

  useEffect(() => {
    setInProgress((i) => !i);
    League.fetchData().then(() => {
      const nextMaches = [...League.getMatches()];
      setInProgress((i) => !i);
      setMatches(nextMaches);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FootballApp>
      <HeadingComponent mainHead={"League Schedule"} />
      {inProgress ? (
        <div className="align-middle text-center">
          <SpinnerComp />
        </div>
      ) : (
        <MatchSchedule matches={matches} />
      )}
    </FootballApp>
  );
}

export default NavScrollExample;
