import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Add.css";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import ReferModel from "../../model/ReferModel";
import CustomerModel from "../../model/CustomerModel";

function Add(): JSX.Element {
    const [refers, setRefers] = useState<ReferModel[]>([]);
    const { register, handleSubmit } = useForm<CustomerModel>();
    const navigate = useNavigate();


    useEffect(() => {
        axios.get("http://localhost:3001/customer/allrefers")
            .then(response => setRefers(response.data));         
    },[])

    const send = async (newCustomer: CustomerModel) => {
        try {
                await axios.post("http://localhost:3001/customer/add",newCustomer)
                .then(res=>{
                    console.log(newCustomer);
                    navigate("/");
                });
        } catch (err: any) {
            console.log(err.message);
        }
    }

    return (
        <div className="Add">
            <Header />
            <div className="Box">
                <form onSubmit={handleSubmit(send)}>
                    <h2>Add customer</h2>

                    <label>refer</label>
                    <select style={{ height: 30 }} {...register("refer")}>
                        <option disabled value="" >Select refer...</option>
                        {refers.map(item => <option key={item.id} value={item.id}>{item.refer}</option>)}
                    </select>

                    <label>name:</label>
                    <input type="text" {...register("name")}/>

                    <label>address:</label>
                    <input type="text" {...register("address")}/>

                    <label>Tel:</label>
                    <input type="text"  {...register("tel")}/>

                    <label>memo:</label>
                    <input type="text" {...register("memo")}/>

                    <input type="submit" value="save customer" style={{ height: 50, backgroundColor: "lightgreen", borderRadius: 20 }} />
                </form>
            </div>
        </div>
    );
}

export default Add;
