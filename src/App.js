import { Routes, Route } from "react-router-dom";

import Header from './components/header/header.js';
import Home from './pages/home/home.js';
import Portfolio from "./pages/portfolio/portfolio.js";
import Services from "./pages/service/service.js";
import Contact from "./components/contact/contact.js";
import About from "./pages/About/about.js";
import Footer from './components/copy-right/footer.js';
import './App.css';
import Admin from "./components/admin/admin.js";

function App() {
  return (
    <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="admin" element={<Admin/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
