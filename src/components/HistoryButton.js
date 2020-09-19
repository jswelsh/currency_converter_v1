import React from "react";

export default function HistoryButton(props) {
  let onClick = function(func){
    const promise = (new Promise(() => func())).then(console.log("finished promise"), console.log("failed promise"))
    return promise
  }
return (
  <div className="HistoryButton">
    <button
      className={props.historyButton}
      onClick={onClick(props.onClick)}
    >
      {props.children}
    </button>
  </div>
);
};