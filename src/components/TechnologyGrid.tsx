import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../types/technology";

const TechnologyGrid = () => {
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
    <section
      id="technologies"
      className="bg-gray-50 pt-2 pb-16">

      <div className="mx-auto max-w-7xl px-4">
      <div className="mb-10 text-center md:text-left">

      <h2 className="mt-2 text-3xl font-bold md:text-3xl">
         Explore the{" "}
         <span className="gradient-text">
         Technologies
        </span>
      </h2>

         <p className="mt-3 max-w-2xl text-gray-600">
          Pick one technology per category to build your ideal stack.
        </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyGrid;