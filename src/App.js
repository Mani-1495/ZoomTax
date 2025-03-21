import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import FrontPage from "./pages/FrontPage";
import About from "./pages/About";
import AppointmentCard from "./pages/AppointmentCard";
import Navbar from "./pages/Navbar";
import BSR from "./pages/bsr";
import CLS from "./pages/cls";
import Contact from "./pages/contact";
import CFO from "./pages/cfo";
import Footer from "./pages/Footer";

function App() {
  const [showAppointment, setShowAppointment] = useState(false);

  return (
    <Router>
      <div>
        <Navbar setShowAppointment={setShowAppointment} />
        {showAppointment && <AppointmentCard onClose={() => setShowAppointment(false)} />}
        <Routes>
          <Route path="/" element={<FrontPage setShowAppointment={setShowAppointment} />} />
          <Route path="/about" element={<About setShowAppointment={setShowAppointment} />} />
          <Route path="/bsr" element={<BSR />} />
          <Route path="/cls" element={<CLS />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cfo" element={<CFO />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
