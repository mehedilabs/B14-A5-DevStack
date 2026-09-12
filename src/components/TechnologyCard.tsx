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

    const badgeColor =
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
              : "bg-cyan-100 text-cyan-600";
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

        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeColor}`}
         >            
          {technology.badge}
        </span>
      </div>

      <h3 className="text-[#0F172A] mt-5 text-xl font-bold">
        {technology.name}
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-600">
        {technology.description}
      </p>

<div className="mt-5 flex items-center justify-between">

  <span className="text-[#475569] rounded-full bg-gray-100 px-3 py-1 text-xs">
    {technology.category}
  </span>

  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
    {technology.difficulty}
  </span>

  <div className="flex items-center gap-2">
    <FaStar className="text-yellow-400" />

    <span className="font-semibold text-[#334155]">
      {technology.rating}
    </span>
  </div>

</div>

     <button
    onClick={() => {
  if (isAdded) {
    toast.warning("This technology is already in your stack!");
    return;
  }

  onAddToStack(technology);
  toast.success("Added to Stack!");
}}
 className={`mt-5 w-full rounded-xl py-3 font-semibold ${
  isAdded
    ? "cursor-not-allowed bg-[#DB2777]/10 text-[#DB2777]"
    : "cursor-pointer bg-black text-white"
}`}>
   {isAdded ? "✓ Added to Stack" : "Add to Stack"}
    </button>
    </div>
  );
};

export default TechnologyCard;