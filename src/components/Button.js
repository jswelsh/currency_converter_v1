import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";

export default function Button(props) {


/*    const buttonClass = classnames("button", {
     "button--danger": props.danger,
     "button--confirm": props.confirm
   }); 
       return (
      <button
        className={buttonClass}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
   );
 }*/

   const ButtonClass = makeStyles((theme) => ({
    root: {
      display: "flex",
      backgroundColor: "#222222"
    },
  }))

    return (
      <button
        className={buttonClass}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
   );
 }