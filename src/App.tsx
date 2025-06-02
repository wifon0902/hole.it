import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import TeamsForm from "./components/TeamsForm";
import Teams from "./components/Teams";
import { Toaster } from "@/components/ui/sonner";

const App = () => {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Hero />
      <Cards />
      <TeamsForm />
      <Teams />
    </div>
  );
};

export default App;
