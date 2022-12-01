import { useState } from "react";
import { userLogout } from "../../../redux/authState";
import { store } from "../../../redux/store";
import "./Header.css";


function Header(): JSX.Element {
    // הדרך לרנדר קומפוננטה בעזרת פונקציה היא  כזאת
const [stam, setStam] = useState(false);

    const makeLoguot = ()=>{
        console.log("hello me");
        store.dispatch(userLogout());
        setStam(true);
    };

    
    return (
        <div className="Header">
			<h1>hello {store.getState().authState.userName}
            {/*store.getState().authState.userRole איך מושכים את הוליו*/}
            <button onClick={makeLoguot}>Loguot</button></h1>
            
        </div>
    );
}

export default Header;
