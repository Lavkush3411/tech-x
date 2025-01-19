import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
// import ProjectShowcase from "@/components/Projects";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <Toaster />
      <About />
      <Services />
      {/* <ProjectShowcase /> */}
      <Technologies />
      <ContactForm />
    </div>
  );
}
