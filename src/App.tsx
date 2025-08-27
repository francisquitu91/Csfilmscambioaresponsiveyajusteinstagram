import React from 'react';
import Navbar from './components/navigation/Navbar';
import AboutUs from './components/AboutUs';
import Portfolio from './components/portfolio/Portfolio';
import Clients from './components/clients/Clients';
import Quote from './components/quote/Quote';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-900">
        <AboutUs />
        <Portfolio />
        <Clients />
        <Quote />
      </main>
      <Footer />
    </>
  );
}

export default App;