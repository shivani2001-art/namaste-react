import { LOGO_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Heading = () => {

  // if no dependemcy array => useEffect will run on every render
  // if empty dependency array => useEffect will run only once when the component mounts
  // if dependency array has some value => useEffect will run when the value changes

  useEffect(() => {
    console.log("Heading component loaded");
  });

  const [btnName, setBtnName] = useState("Login");
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} alt="Food App" />
      </div>
        <div className='nav-items'>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
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