/**
 * A class representing a service that processes the data for match schedule
 * and generates leaderboard.
 *
 * NOTE: MAKE SURE TO IMPLEMENT ALL EXISITNG METHODS BELOW WITHOUT CHANGING THE INTERFACE OF THEM,
 *       AND PLEASE DO NOT RENAME, MOVE OR DELETE THIS FILE.
 *
 */
class LeagueService {
  /**
   * Sets the match schedule.
   * Match schedule will be given in the following form:
   * [
   *      {
   *          matchDate: [TIMESTAMP],
   *          stadium: [STRING],
   *          homeTeam: [STRING],
   *          awayTeam: [STRING],
   *          matchPlayed: [BOOLEAN],
   *          homeTeamScore: [INTEGER],
   *          awayTeamScore: [INTEGER]
   *      },
   *      {
   *          matchDate: [TIMESTAMP],
   *          stadium: [STRING],
   *          homeTeam: [STRING],
   *          awayTeam: [STRING],
   *          matchPlayed: [BOOLEAN],
   *          homeTeamScore: [INTEGER],
   *          awayTeamScore: [INTEGER]
   *      }
   * ]
   *
   * @param {Array} matches List of matches.
   */
  constructor(matches = []) {
    this.matches = [...matches];
  }
  setMatches(matches) {
    this._matches = [...matches];
    return this.getMatches();
  }

  /**
   * Returns the full list of matches.
   *
   * @returns {Array} List of matches.
   */
  getMatches() {
    return this._matches;
  }

  /**
   * Returns the leaderboard in a form of a list of JSON objecs.
   *
   * [
   *      {
   *          teamName: [STRING]',
   *          matchesPlayed: [INTEGER],
   *          goalsFor: [INTEGER],
   *          goalsAgainst: [INTEGER],
   *          points: [INTEGER]
   *      },
   * ]
   *
   * @returns {Array} List of teams representing the leaderboard.
   */
  calculatePoint(homeScore, awayScore) {
    if (homeScore > awayScore) {
      return 3;
    } else if (homeScore === awayScore) {
      return 1;
    }
    return 0;
  }

  setInitialValues() {
    return {
      matchPlay: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDiff: 0,
      points: 0,
      wonFrom: [],
    };
  }

  setTeamValues(team, forGoal, antiGoal, teamB) {
    return {
      matchPlay: team.matchPlay + 1,
      goalsFor: team.goalsFor + forGoal,
      goalsAgainst: team.goalsAgainst + antiGoal,
      goalDiff: team.goalDiff + (forGoal - antiGoal),
      points: team.points + this.calculatePoint(forGoal, antiGoal),
      wonFrom:
        forGoal > antiGoal ? [...team.wonFrom, teamB] : [...team.wonFrom],
    };
  }

  tieBreaker(a, b) {
    if (a.wonFrom.includes(b.team)) {
      return -1;
    } else if (b.wonFrom.includes(a.team)) {
      return 1;
    } else {
      // If no headon match - check GD - 2nd Tiebreaker
      if (b.goalDiff === a.goalDiff) {
        // If both GD same - check GF - 3rd Tiebreaker
        if (b.goalsFor === a.goalsFor) {
          // If both GF same - check alphabets - 4th Tiebreaker
          return b.team - a.team;
        }
        return b.goalsFor - a.goalsFor;
      }
      return b.goalDiff - a.goalDiff;
    }
  }

  getLeaderboard() {
    const leader = {};
    this.getMatches().length > 0 &&
      this.getMatches().forEach((match) => {
        if (!leader[match.homeTeam]) {
          leader[match.homeTeam] = this.setInitialValues();
        }

        if (!leader[match.awayTeam]) {
          leader[match.awayTeam] = this.setInitialValues();
        }

        if (match.matchPlayed) {
          leader[match.homeTeam] = this.setTeamValues(
            { ...leader[match.homeTeam] },
            match.homeTeamScore,
            match.awayTeamScore,
            match.awayTeam
          );

          leader[match.awayTeam] = this.setTeamValues(
            { ...leader[match.awayTeam] },
            match.awayTeamScore,
            match.homeTeamScore,
            match.homeTeam
          );
        }
      });

    // convert leader to array
    const leaderlist = [];
    for (const prop in leader) {
      leader[prop].team = prop;
      leaderlist.push(leader[prop]);
    }
    leaderlist.sort((a, b) => {
      // If both points are same - 1st Tiebreaker
      if (b.points === a.points) {
        return this.tieBreaker(a, b);
      }
      return b.points - a.points;
    });
    return leaderlist;
  }

  /**
   * Asynchronic function to fetch the data from the server.
   */
  authToken() {
    return fetch("http://localhost:3001/api/v1/getAccessToken")
      .then((response) => response.json())
      .then((data) => data);
  }

  fetchMatches(fetchHeader) {
    return fetch("http://localhost:3001/api/v1/getAllMatches", fetchHeader)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.matches) {
          this.setMatches(data.matches);
          return data.matches;
        }
      });
  }

  async fetchData() {
    // http://localhost:3001/api/version
    const token = await this.authToken();
    const fetchHeader = {};
    if (token && token.access_token) {
      fetchHeader.headers = {
        Authorization: `Bearer ${token.access_token}`,
      };
    }
    await this.fetchMatches(fetchHeader);
  }
}

export default LeagueService;
