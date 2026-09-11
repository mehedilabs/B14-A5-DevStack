import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../types/technology";

interface TechnologyGridProps {
  onAddToStack: (technology: Technology) => void;
}

const TechnologyGrid = ({
  onAddToStack,
}: TechnologyGridProps) => {
  const [technologies, setTechnologies] = useState<Technology[]>(
    [],
  );

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
      });
  }, []);

  return (
    <section id="technologies" className="bg-gray-50 py-16">
      <div>
        <div className="mb-10">
          <p className="font-semibold text-orange-500">
            Explore
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Technologies
          </h2>

          <p className="mt-3 text-gray-600">
            Choose the technologies you want to add to your
            development stack.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              onAddToStack={onAddToStack}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyGrid;