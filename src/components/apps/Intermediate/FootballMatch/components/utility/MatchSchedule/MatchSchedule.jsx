import Table from "react-bootstrap/Table";
import tableStyle from "./MatchSchedule.module.css";

function MatchSchedule({ matches }) {
  function getDateFormat(matchDate) {
    let dateForm = new Date(matchDate);
    return (
      dateForm.getDate() +
      "." +
      dateForm.getMonth() +
      "." +
      dateForm.getFullYear()
    );
  }

  function getTimeFormat(matchDate) {
    let timeForm = new Date(matchDate);
    return timeForm.getHours() + ":" + timeForm.getMinutes();
  }

  return (
    <Table className={`${tableStyle.table} align-middle`}>
      <thead>
        <tr className={tableStyle.tableHeadRow}>
          <th
            className={`${tableStyle.rightFormat} ${tableStyle.disableOn500}`}
          >
            Date/Time
          </th>
          <th className={`ps-5 ${tableStyle.disableOn750}`}>Stadium</th>
          <th></th>
          <th className="text-center">Home Team</th>
          <th></th>
          <th className="text-center">Away Team</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {matches.map((match) => {
          return (
            <tr
              className={tableStyle.tableRow}
              key={match.matchDate + match.homeTeam + match.awayTeam}
            >
              <td
                className={`${tableStyle.rightFormat} ${tableStyle.disableOn500}`}
              >
                <div>{getDateFormat(match.matchDate)}</div>
                <div>{getTimeFormat(match.matchDate)}</div>
              </td>
              <td className={`ps-5 ${tableStyle.disableOn750}`}>
                {match.stadium}
              </td>
              <td className={`${tableStyle.bold} ${tableStyle.rightFormat}`}>
                {match.homeTeam}
              </td>
              <td className="text-center">
                <img
                  alt={`${match.homeTeam} flag`}
                  src={`https://flagsapi.codeaid.io/${match.homeTeam}.png`}
                  width="53"
                  height="37"
                  className="d-inline-block align-top"
                />
              </td>
              <td className={`${tableStyle.bold} text-center`}>
                {match.matchPlayed
                  ? match.homeTeamScore + " : " + match.awayTeamScore
                  : "- : -"}
              </td>
              <td className="text-center">
                <img
                  alt={`${match.awayTeam} flag`}
                  src={`https://flagsapi.codeaid.io/${match.awayTeam}.png`}
                  width="53"
                  height="37"
                  className="d-inline-block align-top"
                />
              </td>
              <td className={`${tableStyle.bold} ${tableStyle.leftFormat}`}>
                {match.awayTeam}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default MatchSchedule;
