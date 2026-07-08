import { Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center">

        <h3 className="text-xl font-bold text-slate-900">
          Collab Board
        </h3>

        <p className="mt-3 text-slate-500">
          Built with React • Express • MongoDB
        </p>

        <p className="mt-2 text-slate-400">
          Created for the OneShopAI Web Development Assignment
        </p>

        <div className="mt-5 flex justify-center items-center gap-2 text-slate-500">
          Made with
          <Heart size={18} className="text-red-500 fill-red-500" />
          by Khwahish Seth
        </div>

      </div>
    </footer>
  );
}

export default Footer;