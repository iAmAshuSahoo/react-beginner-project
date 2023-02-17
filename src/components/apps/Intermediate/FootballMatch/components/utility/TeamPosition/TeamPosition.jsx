import Table from "react-bootstrap/Table";
import teamPos from "./TeamPosition.module.css";

export default function TeamPosition({ leaderList }) {
  return (
    <Table className={teamPos.table}>
      <thead>
        <tr className={teamPos.tableHeadRow}>
          <th>Team Name</th>
          <th>MP</th>
          <th className={`${teamPos.disableGAOn500}`}>GF</th>
          <th className={`${teamPos.disableGAOn500}`}>GA</th>
          <th className={`${teamPos.enableGDOn500}`}>GD</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {leaderList.map((leader) => {
          return (
            <tr
              className={teamPos.tableRow}
              key={leader.team + leader.points + leader.goalsFor}
            >
              <td className="align-middle">
                <img
                  alt={`${leader.team} flag`}
                  src={`https://flagsapi.codeaid.io/${leader.team}.png`}
                  width="53"
                  height="37"
                  className="d-inline-block align-top"
                />
                <div className={teamPos.bold}>{leader.team}</div>
              </td>
              <td className="align-middle">{leader.matchPlay}</td>
              <td className={`${teamPos.disableGAOn500} align-middle`}>
                {leader.goalsFor}
              </td>
              <td className={`${teamPos.disableGAOn500} align-middle`}>
                {leader.goalsAgainst}
              </td>
              <td className={`${teamPos.enableGDOn500} align-middle`}>
                {leader.goalDiff}
              </td>
              <td className={`align-middle ${teamPos.point}`}>
                {leader.points}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
