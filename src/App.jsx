import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import Home from './pages/Home/Home';
import StreetScript from './pages/Collections/StreetScript';
import OurStory from './pages/OurStory/OurStory';
import RootAndRoad from './pages/Collections/RootAndRoad';
import Sunbearers from './pages/Collections/Sunbearers';
import AllProducts from './pages/AllProducts/AllProducts';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-white font-sans overflow-hidden md:overflow-visible">
        
        <Navbar />

        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections/street-script" element={<StreetScript />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/collections/root-and-road" element={<RootAndRoad />} />
            <Route path="/collections/sunbearers" element={<Sunbearers />} />
            <Route path="/all-products" element={<AllProducts />} />
            {/* <Route path="/cart" element={<Cart />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        
      </div>
    </Router>
  );
}

export default App;