import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DeviceModel from "../../../model/deviceModel";
import ScenarioModel from "../../../model/ScenariosModel";
import "./AddScenario.css";

function AddScenario(): JSX.Element {
    const [devices, setDevices] = useState<DeviceModel[]>([]);
    const { register, handleSubmit } = useForm<ScenarioModel>();
    useEffect(() => {
        axios.get("http://localhost:3001/device/all")
        .then(response=>setDevices(response.data));
    }, []);
    const send = async (newScenario:ScenarioModel)=>{
        await axios.post("http://localhost:3001/device/");
    }
    return (
        <div className="AddScenario ">
			 <form onSubmit={handleSubmit(send)}>
                <label>devices type</label>
                <select   {...register("device_type")}>
                <option disabled value="">בחר סוג תשלום </option>
                {devices.map((item)=><option key={item.id} value={item.id}> {item.name} </option> )}
                </select>
                <label>name</label>
                <input type="text" {...register("name")}/>
                <label>start_value</label>
                <input type="number" {...register("start_value")}/>
                <label>end_value</label>
                <input type="number" {...register("end_value")}/>
                <label>start_date</label>
                <input type="date" {...register("start_date")}/>
                <label>end_date</label>
                <input type="date" {...register("end_date")}/>
                <button>add scenario</button>
            </form>
        </div>
    );
}

export default AddScenario;
