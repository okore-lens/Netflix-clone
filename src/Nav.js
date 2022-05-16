import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://gravatar.com/avatar/6da744e609111d0e3f7e7db8ef26bc63?s=400&d=robohash&r=x"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
