import { SearchX, PlusCircle } from "lucide-react";

const EmptyState = ({ isFiltered, clearFilter }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-12 flex flex-col items-center text-center">

      <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-6">
        <SearchX className="text-blue-600" size={40} />
      </div> 

      <h2 className="text-2xl font-bold text-slate-800">
        {isFiltered
          ? "No Posts Match This Skill"
          : "No Collaboration Posts Yet"}
      </h2>

      <p className="mt-3 text-slate-500 max-w-md leading-7">
        {isFiltered
          ? "No collaboration posts match the selected skill. Try another skill or clear the filter."
          : "There are no collaboration requests yet. Be the first to publish your project and start building with others."}
      </p>

      {isFiltered ? (
        <button
          onClick={clearFilter}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition duration-300"
        >
          Clear Filter
        </button>
      ) : (
        <button
          onClick={() =>
            document
              .getElementById("create-post")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-8 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition duration-300"
        >
          <PlusCircle size={18} />
          Create First Post
        </button>
      )}
    </div>
  );
};

export default EmptyState;