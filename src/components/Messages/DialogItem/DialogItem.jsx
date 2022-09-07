import React from "react";
import classes from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = ({ avtorLink, imageAvatar, avtor }) => {
  let path = "/Messages/" + avtorLink;
  return (
    <div>
      <NavLink
        to={path}
        className={(navData) =>
          navData.isActive ? classes.active : classes.interlocutor
        }
      >
        <div className={classes.nameAvatar}>
          <img alt={imageAvatar} src={imageAvatar} />
          {avtor}
        </div>
      </NavLink>
    </div>
  );
};

export default DialogItem;
