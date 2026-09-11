import { FaStar } from "react-icons/fa";
import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
}

const TechnologyCard = ({
  technology,
}: TechnologyCardProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-12 w-12 object-contain"
        />

       <span
  className={`rounded-full px-3 py-1 text-xs font-semibold ${
    technology.badge === "Popular"
      ? "bg-orange-100 text-orange-600"
      : technology.badge === "Trending"
      ? "bg-purple-100 text-purple-600"
      : technology.badge === "Essential"
      ? "bg-blue-100 text-blue-600"
      : technology.badge === "Recommended"
      ? "bg-green-100 text-green-600"
      : technology.badge === "Powerful"
      ? "bg-red-100 text-red-600"
      : "bg-gray-100 text-gray-600" }`}>
      {technology.badge}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold">
        {technology.name}
      </h3>

      <p className="mt-2 min-h-12 text-sm leading-6 text-gray-600">
        {technology.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
          {technology.category}
        </span>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
          {technology.difficulty}
        </span>
      </div>

      <div className="mt-5 flex items-center gap-2">
        <FaStar className="text-yellow-400" />

        <span className="font-semibold">
          {technology.rating}
        </span>
      </div>

      <button className="mt-5 w-full rounded-xl bg-black py-3 font-semibold text-white">
        Add to Stack
      </button>
    </div>
  );
};

export default TechnologyCard;