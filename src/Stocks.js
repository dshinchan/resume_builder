import React, { useState } from "react";
import "./App.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle, faBars } from "@fortawesome/free-solid-svg-icons";
import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";

export const Stocks = ({ ref, item, handleischanged }) => {
  const [text, setText] = useState(item.data);
  const [isEditing, setIsEditing] = useState(false);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    handleischanged();
    // Perform any additional logic or save the updated text
  };
  if (!item) return <></>;
  return (
    <>
      <div className="card">
        <FontAwesomeIcon icon={faBars} className="col1" />
        <Tooltip title={item.tooltip}>
          <FontAwesomeIcon icon={faInfoCircle} className="col1" />
        </Tooltip>
        {!isEditing ? (
          <div>{text}</div>
        ) : (
          <input type="text" value={text} onChange={handleTextChange} />
        )}
        {!isEditing ? (
          <FontAwesomeIcon
            icon={faPen}
            onClick={handleEditClick}
            className="col1"
          />
        ) : (
          <FontAwesomeIcon
            icon={faPen}
            onClick={handleSaveClick}
            className="col1"
          />
        )}
        <Switch defaultChecked size="small" color="secondary" />
        {/* Add more rows as needed */}
      </div>
      <Divider />
    </>
  );
};
