import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing'; // Import your components
import ViewBuilding from './pages/ViewBuilding';
import Listings from './pages/Listings';
// import Contact from './Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/view-building" element={<ViewBuilding />} />
        <Route path="/main" element={<Listings />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
