import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

function Header() {
  const [btnName, setBtnName] = useState("Login");
  const { loggedInUser } = useContext(userContext);

  const loginToggle = () => {
    setBtnName((prevState) => (prevState === "Login" ? "Logout" : "Login"));
  };
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" />
        <div className="nav-items">
          <ul className="flex">
            <li>{onlineStatus ? <p>🟢</p> : <p>🔴</p>}</li>
            <li>User: {loggedInUser}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>{" "}
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <Link to="/cart">Cart = {cartItems.length} items</Link>
            </li>
            <li>
              <button onClick={loginToggle} className="login-btn">
                {btnName}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
