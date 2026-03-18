import React from 'react';
import { HashRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhatWeFix from './pages/WhatWeFix';
import HowWeWork from './pages/HowWeWork';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import HipaaHub from './pages/HipaaHub';
import M365Audit from './pages/M365Audit';

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/what-we-fix" element={<WhatWeFix />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/hipaa-hub" element={<HipaaHub />} />
        <Route path="/m365-audit" element={<M365Audit />} />
      </Routes>
    </Router>
  );
};

export default App;
