import { Slider } from "@mui/material";
import "./Shutter.css";

interface switchProps {
    name: string;
    value: number;
}

function Shutter(props: switchProps): JSX.Element {
    return (
        <div className="Shutter Box">
            {props.name}<br /><br />
            <Slider 
                defaultValue={props.value}
                aria-label="Default"
                valueLabelDisplay="auto"
            />
        </div>
    );
}

export default Shutter;