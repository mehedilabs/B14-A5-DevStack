import { FiX } from "react-icons/fi";
import { toast } from "react-toastify";
import type { Technology } from "../types/technology";

interface StackItemProps {
  technology: Technology;
  onRemove: (id: number) => void;
}

const StackItem = ({
  technology,
  onRemove,
}: StackItemProps) => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-gray-50 p-3">
      <div className="flex items-center gap-3">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-9 w-9 object-contain"
        />

        <div>
          <p className="font-semibold">
            {technology.name}
          </p>

          <p className="text-xs text-gray-500">
            {technology.category}
          </p>
        </div>
      </div>

      <button
          onClick={() => {
          onRemove(technology.id);
          toast.error("Removed from Stack!");
        }}
        className="rounded-full p-2 text-gray-500 hover:bg-red-100 hover:text-red-500"
      >
        <FiX />
      </button>
    </div>
  );
};

export default StackItem;