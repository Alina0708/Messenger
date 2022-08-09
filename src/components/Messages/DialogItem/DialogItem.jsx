import React from "react";
import classes from "./DialogItem.module.css"
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/Messages/" + props.avtorLink;
    return (
      <div>
        <NavLink
          to={path}
          className={(navData) =>
            navData.isActive ? classes.active : classes.interlocutor
          }
        >
          {props.avtor}
        </NavLink>
      </div>
    );
  };

  export default DialogItem;