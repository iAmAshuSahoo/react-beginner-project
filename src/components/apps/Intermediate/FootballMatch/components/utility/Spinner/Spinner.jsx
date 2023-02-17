import Spinner from "react-bootstrap/Spinner";

function SpinnerComp() {
  return (
    <Spinner animation="border" role="status" className="align-middle">
      <span className="visually-hidden align-middle">Loading...</span>
    </Spinner>
  );
}

export default SpinnerComp;
