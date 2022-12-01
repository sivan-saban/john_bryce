import { Route, Routes } from "react-router-dom";
import AddDevice from "../../Pages/AddDevice/AddDevice";
import AddScenario from "../../Pages/AddScenario/AddScenario";
import Home from "../../Pages/Home/Home";
import Page404 from "../../Pages/Page404/Page404";
import ScenarioList from "../../Pages/ScenarioList/ScenarioList";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			        <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/scenarioList" element={<ScenarioList/>}/>
                <Route path="/addScenario" element={<AddScenario/>}/>
                 <Route path="/addDevice" element={<AddDevice/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default Routing;
