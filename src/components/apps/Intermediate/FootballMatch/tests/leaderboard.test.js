/**
 *
 *  THIS IS A TESTING FILE. YOU CAN FREELY MODIFY THE CODE BELOW IN ORDER TO TEST YOUR WORK.
 *  PLEASE DON´T CHANGE THE INTERFACE OF leagueService.js METHODS
 *
 */

require("jest-fetch-mock").enableMocks();
fetchMock.dontMock();

import LeagueService from "../src/services/LeagueService";

describe("laderboard", () => {
  let leagueService;

  beforeEach(() => {
    leagueService = new LeagueService();
  });

  test("check-leaderboard-teams", async () => {
    const matches = [
      {
        matchDate: Date.now(),
        stadium: "Maracanã",
        homeTeam: "Brazil",
        awayTeam: "France",
        matchPlayed: true,
        homeTeamScore: 2,
        awayTeamScore: 1,
      },
    ];
    leagueService.setMatches(matches);

    const leaderboard = leagueService.getLeaderboard();
    console.log("matches", matches);
    console.log("leaderboard", leaderboard);
    const firstTeam = leaderboard[0];
    expect(firstTeam.team).toBe("Brazil");
    expect(firstTeam.matchPlay).toBe(1);
    expect(firstTeam.goalsFor).toBe(2);
    expect(firstTeam.goalsAgainst).toBe(1);
    expect(firstTeam.points).toBe(3);

    const secondTeam = leaderboard[1];
    expect(secondTeam.team).toBe("France");
    expect(secondTeam.matchPlay).toBe(1);
    expect(secondTeam.goalsFor).toBe(1);
    expect(secondTeam.goalsAgainst).toBe(2);
    expect(secondTeam.points).toBe(0);
  });
});
