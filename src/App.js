import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Camchainfullscr from './components/Camchainfullscr';
import Spprimaryfullscr from './components/Spprimaryfullscr';
import Spsecondaryfullscr from './components/Spsecondaryfullscr';
import Flangeboltfullscr from './components/Flangeboltfullscr';
import Tempsensorfullscr from './components/Tempsensorfullscr';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/camchain" element={<Camchainfullscr />} />
        <Route path="/spprimary" element={<Spprimaryfullscr />} />
        <Route path="/spsecondary" element={<Spsecondaryfullscr />} />
        <Route path="/flangebolt" element={<Flangeboltfullscr />} />
        <Route path="/tempsensor" element={<Tempsensorfullscr />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
