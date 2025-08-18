import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Heading = () => {

  // if no dependemcy array => useEffect will run on every render
  // if empty dependency array => useEffect will run only once when the component mounts
  // if dependency array has some value => useEffect will run when the value changes

  const [btnName, setBtnName] = useState("Login");
  const isOnline = useOnlineStatus();
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} alt="Food App" />
      </div>
        <div className='nav-items'>
            <ul>
            <li><h3>Online Status: {isOnline ? "Online" : "Offline"}</h3></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/grocery">Grocery</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><button className="login-btn" onClick={() => {
                setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}>
            {btnName}</button></li>
            </ul>
        </div>
    </div>
  );
}

export default Heading;