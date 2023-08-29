import io from "socket.io-client";

const socket = io(process.env.PORT || "http://localhost:3001"); // Change to your server URL

export default socket;
