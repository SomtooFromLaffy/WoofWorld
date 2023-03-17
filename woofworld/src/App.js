import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import AppointmentPage from "./routes/AppointmentPage";
import AdoptionPage from "./routes/AdoptionPage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/adoption" element={<AdoptionPage />} />
      </Routes>
    </div>
  );
}

export default App;
