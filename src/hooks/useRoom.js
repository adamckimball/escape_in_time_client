import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const NEW_ESCAPE_MESSAGE_EVENT = "newEscapeMessage";
const START_ESCAPE_EVENT = "startEscape";
const SOCKET_SERVER_URL = process.env.PORT || "localhost:3001";

const useRoom = roomId => {
  const [message, setMessage] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const socketRef = useRef();

  useEffect(() => {
    // Creates a WebSocket connection
    socketRef.current = io(SOCKET_SERVER_URL, {
      query: { roomId },
    });

    // Listens for incoming messages
    socketRef.current.on(NEW_ESCAPE_MESSAGE_EVENT, messageText => {
      setMessage(messageText);
    });

    socketRef.current.on(START_ESCAPE_EVENT, () => setGameStarted(true));

    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  // Sends a message to the server that
  // forwards it to all users in the same room
  const sendMessage = messageText => {
    socketRef.current.emit(NEW_ESCAPE_MESSAGE_EVENT, messageText);
  };

  const startGame = () => {
    return socketRef.current.emit(START_ESCAPE_EVENT);
  };

  return {
    message,
    gameStarted,
    sendMessage,
    startGame,
  };
};

export default useRoom;
