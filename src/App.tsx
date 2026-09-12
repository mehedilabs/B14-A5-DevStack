import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import StackSidebar from "./components/StackSidebar";
import TechnologyGrid from "./components/TechnologyGrid";
import type { Technology } from "./types/technology";
import Footer from "./components/Footer";

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

const handleAddToStack = (technology: Technology) => {
  const alreadyAdded = stack.some(
    (item) => item.id === technology.id,
  );

  if (alreadyAdded) {
    return;
  }

  setStack([...stack, technology]);
};

const handleRemove = (id: number) => {
  setStack(stack.filter((item) => item.id !== id));
};
const handleRemoveAll = () => {
  setStack([]);
};
  return (
    <>
      <Navbar />
      <Hero />

      <main className="bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
           <TechnologyGrid
            onAddToStack={handleAddToStack}
              stack={stack}
              />
          </div>

          <StackSidebar
           stack={stack}
           onRemove={handleRemove}
           onRemoveAll={handleRemoveAll}
           />
        </div>
      </main>
      <Footer />
        <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;


