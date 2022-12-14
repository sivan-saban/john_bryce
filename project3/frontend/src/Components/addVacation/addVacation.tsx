import Vacation from "../../Models/Vacation";
import MenuAdmin from "../MenuAdmin/MenuAdmin";
import "./addVacation.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddVacation(): JSX.Element {
    const {register, handleSubmit} = useForm<Vacation>();
    const navigate = useNavigate();
   
    const send = async (newVacation:Vacation) => {
        await axios.post("http://localhost:3003/admin/",newVacation)
        .then(response=>{
            console.log(response.data);
            navigate("/");
        })
    }
    return (
        <div className="addVacation">
			<header><MenuAdmin/></header>
            {/* <main>add</main> */}
             <form onSubmit={handleSubmit(send)}className="Box">
                <label>Destination</label>
                <input type="text" {...register("destination")}/>
                <label>Description</label>
                <input type="text" {...register("description")}/>
                <label>Price</label>
                <input type="number"{...register("price")}/>
                <label>Price</label>
                <input type="number"{...register("price")}/>
                <label>Start date</label>
                <input type="date"{...register("start_date")}/>
                <label>End date</label>
                <input type="date"{...register("end_date")}/>
                <label>Update Image</label>
                <input type="file"{...register("vacation_img")}/>
                <input type="submit" value="save vacation" style={{ borderRadius: 20 }} />
            </form>
        </div>
    );
}

export default AddVacation;


