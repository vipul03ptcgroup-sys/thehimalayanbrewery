import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Snowflakes from "./components/Snowflakes";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <Snowflakes />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}
