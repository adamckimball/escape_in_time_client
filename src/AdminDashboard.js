import React, { useState, useEffect } from "react";
import styled from "styled-components";
import _ from "lodash-fp";
import { useParams } from "react-router-dom";

import useRoom from "./hooks/useRoom";
import { adventureClues as values } from "./rooms/commanderRogers";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #000;
  color: #fff;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ListItem = styled.div`
  border-top: 2px solid #fff;
  padding: 10px;
  margin-top: 10px;
  background-color: #000;
  color: #fff;
`;

const AdminDashboard = () => {
  const [helpers, setHelpers] = useState([]);
  const { roomId } = useParams();
  const {
    message = "",
    sendMessage,
    gameStarted = false,
    startGame,
  } = useRoom(roomId);
  console.log({ message, sendMessage, gameStarted, startGame });

  useEffect(() => {
    if (values) {
      setHelpers(
        _.map(
          ({ id, ancestors, puzzle, clue }) => ({
            id,
            puzzle,
            clue,
            solved: false,
            ancestors,
          }),
          values,
        ),
      );
    }
  }, []);

  const setSolved = (puzzleId, puzzleAncestors = []) => {
    setHelpers(
      _.compact(
        _.map(({ id, puzzle, clue, solved, ancestors }) => {
          if (id === puzzleId) return null;
          if (puzzleAncestors.includes(id)) return null;
          return { id, puzzle, clue, ancestors, solved };
        }, helpers),
      ),
    );
  };

  return (
    <ContentContainer>
      {!gameStarted ? (
        <button onClick={startGame}>Start Game</button>
      ) : (
        <List>
          <button onClick={() => sendMessage("")}>Clear clue</button>
          {helpers.map(helper => (
            <ListItem key={helper.id} solved={helper.solved}>
              <p>{helper.puzzle}</p>
              <button
                onClick={() => sendMessage(helper.clue)}
                disabled={helper.clue === message}
              >
                Show Clue
              </button>
              <button
                onClick={() => {
                  setSolved(helper.id, helper.ancestors);
                  if (helper.clue === message) {
                    sendMessage("");
                  }
                }}
                disabled={helper.solved}
              >
                Set Solved
              </button>
            </ListItem>
          ))}
        </List>
      )}
    </ContentContainer>
  );
};

export default AdminDashboard;
