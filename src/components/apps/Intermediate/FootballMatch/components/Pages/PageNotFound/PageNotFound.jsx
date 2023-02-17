import FootballApp from "../../../FootballApp";
import notFoundStyle from "./PageNotFound.module.css";

export default function PageNotFound() {
  return (
    <FootballApp>
      <img alt="logo" src="assets/Images/404.png" className={notFoundStyle.notFound} />
    </FootballApp>
  );
}
