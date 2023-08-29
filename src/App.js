import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import AdminDashboard from "./AdminDashboard";
import RoomDashboard from "./RoomDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/admin/:roomId" element={<AdminDashboard />} />
        <Route exact path="/room/:roomId" element={<RoomDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
