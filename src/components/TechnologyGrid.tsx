import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../types/technology";

interface TechnologyGridProps {
  onAddToStack: (technology: Technology) => void;
  stack: Technology[];
}
const TechnologyGrid = ({
  onAddToStack,
  stack,
}: TechnologyGridProps) => {
  const [technologies, setTechnologies] = useState<Technology[]>(
    [],
  );
   
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);
    
return (
  <section id="technologies" className="bg-gray-50 pt-4 pb-16 md:py-16">
    <div>
      <div className="mb-10">
        <h2 className="text-center text-3xl font-bold md:text-left">
          <span className="text-black">Explore the</span>{" "}
          <span className="gradient-text">Technologies</span>
        </h2>

        <p className="mt-3 text-center text-gray-600 md:text-left">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {loading && (
        <div className="mb-6">
          <span className="loading loading-spinner loading-md"></span>

          <p className="mt-2 text-sm text-gray-500">
            Loading technologies...
          </p>
        </div>
      )}

     {loading ? (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
     {Array.from({ length: 6 }).map((_, index) => (
      <div key={index} className="h-64"></div>
    ))}
    </div>
     ) : (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
       {technologies.map((technology) => (
        <TechnologyCard
        key={technology.id}
        technology={technology}
        onAddToStack={onAddToStack}
        isAdded={stack.some(
          (item) => item.id === technology.id,
        )}
      />
    ))}
  </div>
    )}
    </div>
  </section>
);
};

export default TechnologyGrid;