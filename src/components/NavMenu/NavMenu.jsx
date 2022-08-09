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
          <img src="https://cdn-icons.flaticon.com/png/128/3276/premium/3276917.png?token=exp=1660043647~hmac=698cc567965cc6c359576e947b2301a1" />
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
          <img src="https://cdn-icons.flaticon.com/png/512/2821/premium/2821935.png?token=exp=1660043564~hmac=c4ea9894d572c48c5caa8a228898f871" />
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
          <img src="https://cdn-icons-png.flaticon.com/128/5502/5502315.png" />
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
          <img src="https://cdn-icons-png.flaticon.com/128/6606/6606432.png" />
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
          <img src="https://cdn-icons.flaticon.com/png/128/3888/premium/3888351.png?token=exp=1660043503~hmac=c4c0dd7e1774e1ac37151117efc51520" />
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default NavMenu;
