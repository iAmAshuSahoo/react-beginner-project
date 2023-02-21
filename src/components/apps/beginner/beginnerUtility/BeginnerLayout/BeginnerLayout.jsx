import { Outlet, Link } from "react-router-dom";
import "./BeginnerLayout.css";

export default function BeginnerLayout({ children, headingTitle, bgColor = "bg-white" }) {

    return (
        <div className={bgColor}>
            <div className="initialRoot">
                <Link to={"/"}><p className="home">Go to Home</p></Link>
                <h1 className="main-head">{headingTitle}</h1>
                {children}
            </div>
        </div>
    );
}