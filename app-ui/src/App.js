import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbars from './components/Navbars';
import Home from './components/home';
import AboutUs from './components/about_us';
import Commitment from './components/commitments';
import Donate from './components/donate';
import SignUp from './components/sign_up';
import Footer from './components/footer';
import Sponsors from './components/sponsors';
import Testimonials from './components/testimonials';
import Login from './components/login';
import ProfilePage from './components/profilePage';
import VisionPage from './components/vision';
import MissionPage from './components/mission';
import TeamPage from './components/team'
import MentorshipPage from './components/mentorship';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/commitment" element={<Commitment />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfilePage />} />
            <Route path="/team" element={<TeamPage />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/vision" element={<VisionPage />} />
            <Route path="/mission" element={<MissionPage />} />
            <Route path="/mentorship" element={<MentorshipPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
