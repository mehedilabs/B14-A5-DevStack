import type { Technology } from "../types/technology";

interface StackSidebarProps {
  stack: Technology[];
}

const StackSidebar = ({ stack }: StackSidebarProps) => {
  return (
    <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">
            Your Stack
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {stack.length} technologies selected
          </p>
        </div>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold">
          {stack.length}
        </span>
      </div>

      {stack.length === 0 ? (
        <div className="py-16 text-center">
          <p className="font-medium text-gray-600">
            Your stack is empty.
          </p>

          <p className="mt-2 text-sm text-gray-400">
            Add technologies from the list
            to build your stack.
          </p>
        </div>
      ) : (
        <div className="mt-6 space-y-3">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-xl bg-gray-50 p-3"
            >
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
          ))}
        </div>
      )}
    </aside>
  );
};

export default StackSidebar;