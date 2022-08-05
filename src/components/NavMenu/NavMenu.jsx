import React from "react";
import classes from "./NavMenu.module.css";

const NavMenu = () => {
  return (
    <nav className={`${classes.nav} ${classes.activeLink}`}>
      <div>
        <a href="/Profile">Profile</a>
      </div>
      <div>
        <a href="/Messages">Messages</a>
      </div>
      <div>
        <a>News</a>
      </div>
      <div>
        <a>Music</a>
      </div>
      <div>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default NavMenu;
