import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.jpg";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Navbar = (props) => {
  const handleLanguageChange = (lan) => {
    props.onSelectLanguage(lan);
  };

  const handleMenuChange = (menu) => {
    props.onSelectMenu(menu);
  };

return (
    <div className="navbar">
        <div className="navtop">
            <div className="navtop-lang">
                <button onClick={() => handleLanguageChange("EN")}>EN</button>
                <button onClick={() => handleLanguageChange("TR")}>TR</button>
            </div>
            <div className="navtop-body">
                <div className="navtop-body-logo">
                    <Link to="/">
                        <img src={logo} alt="logo" className="logo-image" />
                    </Link>
                </div>
                <ul>
                    <li onClick={() => handleMenuChange("home")}>
                        <Link to="/">
                            <FormattedMessage id="home" />
                        </Link>{" "}
                        {props.menu === "home" ? <div className="underline"></div> : null}
                    </li>
                    <li onClick={() => handleMenuChange("about")}>
                        <Link to="/about">
                            <FormattedMessage id="about" />
                        </Link>{" "}
                        {props.menu === "about" ? (
                            <div className="underline"></div>
                        ) : null}
                    </li>
                    <li onClick={() => handleMenuChange("gtl")}>
                        <Link to="/gtl">
                            <FormattedMessage id="gtl" />
                        </Link>{" "}
                        {props.menu === "gtl" ? <div className="underline"></div> : null}
                    </li>
                </ul>
            </div>
        </div>
    </div>
);
};

export default Navbar;
