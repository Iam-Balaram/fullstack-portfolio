import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { Certificates } from "./sections/Certificates";
import { Journey } from "./sections/Journey";
import { Chatbot } from "./components/Chatbot";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Journey />
        <Certificates />
        <Contact />
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;
