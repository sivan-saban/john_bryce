import { NavLink } from "react-router-dom";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <NavLink to="/home">Home </NavLink>
            <span> | </span>
            <NavLink to="/scenarioList">Scenario List</NavLink>
            <span> | </span>
            <NavLink to="/addScenario">Add Scenario</NavLink>
          
        </div>
    );
}

export default Header;
