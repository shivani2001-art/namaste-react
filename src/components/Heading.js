import { LOGO_URL } from "../utils/constant";
import { useState } from "react";

const Heading = () => {

  const [btnName, setBtnName] = useState("Login");
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} alt="Food App" />
      </div>
        <div className='nav-items'>
            <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Cart</a></li>
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