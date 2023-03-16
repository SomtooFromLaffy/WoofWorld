import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import AppointmentPage from "./routes/AppointmentPage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<AppointmentPage />} />
      </Routes>
    </div>
  );
}

export default App;
