import { Link } from "react-router-dom";

const Navbar = (props) =>{
    
    return(
        <ul className="nav_list">
            <li>
                <Link to="/" onClick={props.closeHeader}>Home</Link>
            </li>
            <li>
                <Link to="/portfolio" onClick={props.closeHeader}>Portfolio</Link>
            </li>
            <li>
                <Link to="/services" onClick={props.closeHeader}>Services</Link>
            </li>
            <li>
                <Link to="/about" onClick={props.closeHeader}>About</Link>
            </li>
            <li>
                <Link to="/contact" onClick={props.closeHeader}>Contact</Link>
            </li>
            <li>
                <Link id="login_button" to="/admin" onClick={props.closeHeader}>Admin Login</Link>
            </li>
        </ul>
    )
}

export default Navbar;