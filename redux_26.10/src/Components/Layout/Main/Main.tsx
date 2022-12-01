import axios from "axios";
import { useEffect, useState } from "react";
import { coinReducer, refreshCoins } from "../../../redux/coinState";
import { store } from "../../../redux/store";
import "./Main.css";

function Main(): JSX.Element {
    const [user, setUser] = useState(store.getState().authState.userName);
    const [stam, setStam] = useState(false);
    store.subscribe(()=>{
        setUser(store.getState().authState.userName);
    })
    const url = "https://api.coingecko.com/api/v3/coins/";
    useEffect(()=>{
            axios.get(url)
            .then((response)=>{
                console.log(response.data);
                store.dispatch(refreshCoins(response.data));
                setStam(true);
            })
             .catch((err)=>{
             console.log("error", err);
             });
            
    },[]);
    return (
        <div className="Main">
			<h2>Hello {user} </h2>
            <h3>my coin</h3>
            {store.getState().coinState.coins.map((coin) =>{
            return (
            <div className="Box" key={coin.id} >
                <h3>{coin.name} </h3> <hr/>
                {coin.id} <br/>
                {coin.symbol}
            </div>  
            );
            })}

        </div>
    );
}

export default Main;
