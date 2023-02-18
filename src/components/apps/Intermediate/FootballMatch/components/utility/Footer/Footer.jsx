import Card from "react-bootstrap/Card";
import footerStyle from "./Footer.module.css";

export default function Footer() {
  return (
    <Card className={footerStyle.footerInitial}>
      <Card.Footer className="font-weight-bold">API Version 1.0</Card.Footer>
    </Card>
  );
}
