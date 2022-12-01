import axios from "axios";
import { useState } from "react";
import "./Switch.css";
import switchOn from "../../../assets/on.png";
import switchOff from "../../../assets/off.png";
interface shutterProps{
    name:string;
    value:number;
    id:number;
}
function Switch(props:shutterProps): JSX.Element {
    const [state, setState] = useState(props.value===1);
    const changeValue = async()=>{
    await axios.get(`http://localhost:3001/device/${props.id}/${state?0:255}`)
    setState(!state)
}
    return (
        <div className="Switch Box">
			{props.name}<br/><br/>
            <img src={state?switchOn:switchOff} onClick={()=>{changeValue()}}/>
        </div>
    );
}

export default Switch;
