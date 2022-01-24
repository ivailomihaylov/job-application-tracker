import React, { useState, useEffect } from "react";
import "../../CSS/App.css";

const Notification = (props) => {
  // Notifications use states
  const [width, setWidth] = useState(0);
  const [intervalId, setInvetrvalId] = useState(null);
  const [exit, setExit] = useState(false);

  // Start notification timer on component mount (New notification)
  useEffect(() => {
    timerStartHandler(intervalId);
  }, []);

  // Start notification timer
  const timerStartHandler = () => {
    const id = setInterval(() => {
      setWidth((prev) => {
        if (prev < 100) {
          return prev + 0.5;
        }
        clearInterval(id);
        return prev;
      });
      // Run every 20ms
    }, 20);
    setInvetrvalId(id);
  };

  // Pause notification timer
  const timerPauseHandler = () => {
    clearInterval(intervalId);
  };

  const closeNotificationHandler = () => {
    timerPauseHandler();
    setExit(true);
    setTimeout(() => {
      props.dispatch({
        type: "REMOVE_NOTIFICATION",
        id: props.id,
      });
    }, 400);
  };

  useEffect(() => {
    if (width === 100) {
      closeNotificationHandler();
    }
  });

  return (
    <div
      onMouseEnter={timerPauseHandler}
      onMouseLeave={timerStartHandler}
      className={`notification-item ${
        props.type === "SUCCESS" ? "success" : "error"
      } ${exit ? "exit" : ""}`}
    >
      <p>{props.message}</p>
      <div className="bar" style={{ width: `${width}%` }}></div>
    </div>
  );
};
export default Notification;
