import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavMenu.module.css";

const NavMenu = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink
          to="/Profile"
          className={(navData) =>
            navData.isActive ? classes.activeLink : classes.item
          }
        >
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/Messages"
          className={(navData) =>
            navData.isActive ? classes.activeLink : classes.item
          }
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/News"
          className={(navData) =>
            navData.isActive ? classes.activeLink : classes.item
          }
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/Music"
          className={(navData) =>
            navData.isActive ? classes.activeLink : classes.item
          }
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to="Settings"
          className={(navData) =>
            navData.isActive ? classes.activeLink : classes.item
          }
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default NavMenu;
