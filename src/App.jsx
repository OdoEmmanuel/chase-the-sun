import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home/Home';
// import Cart from './pages/Cart/Cart'; // Uncomment when created

function App() {
  return (
    <Router>
      {/* 
        The main wrapper ensures the app takes up at least the full viewport height. 
        We use flex-col so the main content can grow and push the footer to the bottom.
      */}
      <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-white font-sans overflow-x-hidden">
        
        {/* Persistent Global Navigation */}
        <Navbar />

        {/* Dynamic Page Content */}
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>

        {/* Persistent Global Footer */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;