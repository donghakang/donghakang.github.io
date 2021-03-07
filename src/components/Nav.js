import "../App.scss";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";


function Nav() {
    // let languageType = true; // 0 - English, 1 - Korean
    
    const style = {
        color: "#cccccc",
    };

    return (
        <div className="navbar">
            <Link style={style} exact to="/">
                <AiFillHome className="home_button" color="#cccccc"/>
            </Link>
            
        </div>
    );
}

export default Nav;
