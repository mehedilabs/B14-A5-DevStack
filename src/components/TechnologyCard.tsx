import { FaStar } from "react-icons/fa";
import type { Technology } from "../types/technology";
import { toast } from "react-toastify";

interface TechnologyCardProps {
  technology: Technology;
  onAddToStack: (technology: Technology) => void;
  isAdded: boolean;
}

const TechnologyCard = ({
  technology,
  onAddToStack,
  isAdded,
}: TechnologyCardProps) => {
  return (
       <div className={`rounded-2xl border bg-white p-5 shadow-sm ${
            isAdded ? "border-blue-300" : "border-gray-200"
             }`}>
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-12 w-12 object-contain"
        />

        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold">
        {technology.name}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-600">
        {technology.description}
      </p>

<div className="mt-5 flex items-center justify-between">

  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
    {technology.category}
  </span>

  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
    {technology.difficulty}
  </span>

  <div className="flex items-center gap-2">
    <FaStar className="text-yellow-400" />

    <span className="font-semibold">
      {technology.rating}
    </span>
  </div>

</div>

     <button
    onClick={() => {
          onAddToStack(technology);
          toast.success("Added to Stack!");
        }}
  disabled={isAdded}
  className={`mt-5 w-full rounded-xl py-3 font-semibold text-white ${
    isAdded
      ? "cursor-not-allowed bg-gray-400"
      : "bg-black"
    }`}>
   {isAdded ? "✓ Added to Stack" : "Add to Stack"}
    </button>
    </div>
  );
};

export default TechnologyCard;