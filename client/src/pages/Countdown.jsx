import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import io from "socket.io-client";

const socket = io("http://localhost:8080");

const Countdown = () => {
  const [time, setTime] = useState(120);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/countdown") {
      socket.emit("startTimer");
    }
    socket.on("timerUpdate", (data) => {
      setTime(data.remainingTime);
      console.log(data.remainingTime);
      if (data.remainingTime === 1) console.log("first");
    });

    return () => {
      socket.off("timerUpdate");
    };
  }, [location.pathname]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const mins = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${hours}:${mins}:${secs}`;
  };

  // const handleStart = () => {
  //   socket.emit("startTimer");
  // };

  return (
    <div className="countdown-container">
      <h1>{formatTime(time)}</h1>
    </div>
  );
};

export default Countdown;
