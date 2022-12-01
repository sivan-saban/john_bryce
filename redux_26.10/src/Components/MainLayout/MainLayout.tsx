import Header from "../Layout/Header/Header";
import Main from "../Layout/Main/Main";
import Menu from "../Layout/Menu/Menu";
import "./MainLayout.css";

function MainLayout(): JSX.Element {
    return (
        <div className="MainLayout">
			<Header/>
            <Main/>
            <Menu/>
        </div>
    );
}

export default MainLayout;
