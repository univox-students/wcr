import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./modules/NavBar.js";
import BottomBanner from "./modules/BottomBanner.js";

import NotFound from "./pages/NotFound.js";
import Accessibility from "./pages/Accessibility.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Governance from "./pages/Governance.js";
import Welfare from "./pages/welfare/Welfare.js";
import WelfareFAQ from "./pages/welfare/WelfareFAQ.js";
import WhosWho from "./pages/welfare/WhosWho.js";
import WhatsOn from "./pages/whatson/WhatsOn.js";
import Event from "./pages/whatson/Event.js";
import Society from "./pages/whatson/Society.js";
import SocietyAZ from "./pages/whatson/SocietyAZ.js";
import SupportSocieties from "./pages/whatson/SupportSocieties.js";
import Profile from "./pages/Profile.js";
import Contact from "./pages/Contact.js";

import "../utilities.css";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/governance" element={<Governance />} />
        <Route exact path="/profile/:userName" element={<Profile />} />
        <Route exact path="/welfare" element={<Welfare />} />
        <Route exact path="/welfare/welfarefaq" element={<WelfareFAQ />} />
        <Route exact path="/welfare/whoswho" element={<WhosWho />} />
        <Route exact path="/societies-supports" element={<SupportSocieties />} />
        <Route exact path="/societies/:abbreviation" element={<Society />} />
        <Route exact path="/societiesAtoZ" element={<SocietyAZ />} />
        <Route exact path="/events/:eventId" element={<Event />} />
        <Route exact path="/whatson" element={<WhatsOn />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/privacyaccessibility" element={<Accessibility />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomBanner />
    </Router>
  );
};

export default App;
