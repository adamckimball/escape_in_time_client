import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from "lodash-fp";
import { useParams } from "react-router-dom";

import useRoom from "./hooks/useRoom";

const timeFormat = value => {
  if (!_.isNumber(value)) return ``;

  const pad = num => `00${num}`.slice(-2);

  const ms = value % 1000;
  const msValue = (value - ms) / 1000;
  const secs = msValue % 60;
  const secValue = (msValue - secs) / 60;
  const mins = secValue % 60;
  const hrs = (secValue - mins) / 60;

  if (hrs) return "60:00";
  return `${pad(mins)}:${pad(secs)}`;
};

const ContentContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  color: #fff;
  display: grid;
  grid-template-rows: 60% 40%;
`;

const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20vw;
`;

const MessageContainer = styled(TimerContainer)`
  padding: 1em 3em;
  font-size: 5vw;
  text-align: center;
`;

const RoomDashboard = () => {
  const { roomId } = useParams();
  const [milliseconds, setMilliseconds] = useState(3600000);
  const { message, gameStarted, sendMessage } = useRoom(roomId);

  useEffect(() => {
    if (gameStarted) {
      const interval = setInterval(() => {
        setMilliseconds(time => {
          if (time === 0) {
            clearInterval(interval);
            sendMessage("You ran out of time.");
          } else {
            return time - 1000;
          }
          return null;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameStarted, sendMessage]);

  if (gameStarted) {
    return (
      <ContentContainer>
        <TimerContainer>{timeFormat(milliseconds)}</TimerContainer>
        <MessageContainer>{message}</MessageContainer>
      </ContentContainer>
    );
  }

  return (
    <ContentContainer>
      <TimerContainer>Welcome</TimerContainer>
    </ContentContainer>
  );
};

export default RoomDashboard;
