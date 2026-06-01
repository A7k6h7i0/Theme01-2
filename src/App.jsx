import { Routes, Route } from 'react-router-dom';
import CorporateHome from './pages/CorporateHome';
import SaasHome from './pages/SaasHome';
import HealthcareHome from './pages/HealthcareHome';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<CorporateHome />} />
          <Route path="/saas" element={<SaasHome />} />
          <Route path="/healthcare" element={<HealthcareHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
