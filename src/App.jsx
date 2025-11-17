import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <Navbar />
      <Hero onCtaClick={scrollToContact} />
      <Services />
      <Contact ref={contactRef} />
      <footer className="py-10 text-center text-blue-300/70">
        © {new Date().getFullYear()} DevOnline • Servicii dezvoltare web
      </footer>
    </div>
  );
}

export default App
