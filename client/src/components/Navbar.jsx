
import { Users, Plus } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
            <Users className="text-white" size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Collab Board
            </h1>
            <p className="text-sm text-slate-500">
              Find Builders. Build Together.
            </p>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() =>
            document
              .getElementById("create-post")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-5 py-3 rounded-xl font-semibold shadow-lg hover:scale-105"
        >
          <Plus size={20} />
          New Post
        </button>
      </div>
    </header>
  );
}

export default Navbar;