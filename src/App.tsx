import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import StackSidebar from "./components/StackSidebar";
import TechnologyGrid from "./components/TechnologyGrid";
import type { Technology } from "./types/technology";

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
  return (
    <>
      <Navbar />
      <Hero />

      <main className="bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <TechnologyGrid
              onAddToStack={handleAddToStack}
            />
          </div>

          <StackSidebar stack={stack} />
        </div>
      </main>
    </>
  );
}

export default App;
