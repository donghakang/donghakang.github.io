import "../App.scss";
import { Link } from "react-router-dom";

function Nav() {

    const style = {
        color: "blue",
    };
    return (
        <div>
            <Link style={style} exact to="/">
                Dongha Kang
            </Link>
        </div>
    );
}

export default Nav;
