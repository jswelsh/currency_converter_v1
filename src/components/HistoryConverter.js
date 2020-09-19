import React from "react";
import HistoryButton from "./HistoryButton";

export default function HistoryConverter(props) {
  return (
    <HistoryButton
    onClick={props.convertHistoryHandler}
    children={"history"}
    />
  )
}