import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import TeamRegister from "./components/TeamRegister";
import Teams from "./components/Teams";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/sonner";

const App = () => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Hero />
      <Cards />
      <TeamRegister />
      <Teams />
      <Footer />
    </div>
  );
};

export default App;
