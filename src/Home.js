import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeScreen = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const NavContainer = styled.div`
  height: 40px;
  width: 300px;
  background-color: #999;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
`;

const Home = () => {
  const [roomName, setRoomName] = useState("");

  const handleRoomNameChange = event => {
    setRoomName(event.target.value);
  };

  return (
    <HomeScreen>
      <input
        type="text"
        placeholder="Room"
        value={roomName}
        onChange={handleRoomNameChange}
      />
      <NavContainer>
        <Link to={`/room/${roomName}`}>Join Room</Link>
        <Link to={`/admin/${roomName}`}>Join Admin</Link>
      </NavContainer>
    </HomeScreen>
  );
};

export default Home;
