import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import TeamsForm from "./components/TeamsForm";
import { Toaster } from "@/components/ui/sonner";

const App = () => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Hero />
      <Cards />
      <TeamsForm />
    </div>
  );
};

export default App;
