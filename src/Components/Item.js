import "./styles.css";
import React, { useState } from "react";
import Button from "./Button";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faInfoCircle, faBars } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [message, setMessage] = useState("");
  const handleButtonClick = (colname) => {
    // Action to perform when the button is clicked
    setMessage(colname);
  };
  return (
    
  );
}
