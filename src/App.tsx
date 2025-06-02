import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import { Toaster } from "@/components/ui/sonner";

const App = () => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Hero />
      <Cards />
    </div>
  );
};

export default App;
