import axios from "axios";
import { useEffect, useState } from "react";
import DeviceModel from "../../../model/deviceModel";
import Shutter from "../Shutter/Shutter";
import Switch from "../Switch/Switch";
import "./Home.css";

function Home(): JSX.Element {
    const [devices, setDevices] = useState<DeviceModel[]>([]);

    useEffect(() => {
        axios.get("http://localhost:3001/device/all")
        .then(response=>{setDevices(response.data)});
        //.catch((err) => alert(err.message));
    }, [])

    const getDevice = (item:DeviceModel)=>{
        //switch , boiler
        switch (item.name){
            case "switch":
            case "boiler":
            case "light":   
                return <Switch name={item.name} value={item.value} id={item.id}/>
            case "shutter":
                return <Shutter name={item.name} value={item.value}/>
        }
    }
    return (
        <div className="Home">
			<h1>Home Page hello</h1>
            {devices.map(item=>getDevice(item))}
        </div>
    );
}

export default Home;
