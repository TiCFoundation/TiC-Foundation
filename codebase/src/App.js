import React from 'react';
import Navbars from './components/Navbars';
import Home from './components/home';
import AboutUs from './components/about_us';
import Commitment from './components/commitments';
import Donate from './components/donate';
import SignUp from './components/sign_up';
import Footer from './components/footer';
import Sponsors from './components/sponsors';
import Testimonials from './components/testimonials';
import ExecutivePage from './components/executives';
import Login from './components/login'
import ProfilePage from './components/profilePage';

function App() {
  return (
      <div className="App">
        <Navbars/>
          <Home/>
          <AboutUs/>
          <Commitment/>
          <ExecutivePage/>
          <Testimonials/>
          <Donate/>
          <Sponsors/>
          <SignUp/>
          <Login/>
          <ProfilePage/>
          <Footer/>
      </div>
  );
}

export default App;
