import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  bg-[#121212] ">
      <Navbar/>
      <div className="mx-auto container py-4 px-12 mt-24">
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <ContactSection/>
      
      </div>
      <Footer/>
    </main>
  );
}
