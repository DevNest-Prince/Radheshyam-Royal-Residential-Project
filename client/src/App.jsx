import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AppRoutes from './routes';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <AppRoutes />
        <Footer />
        <FloatingContact />
      </div>
    </Router>
  );
}

export default App;