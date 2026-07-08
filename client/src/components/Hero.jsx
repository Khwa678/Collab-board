import { ArrowRight, Compass } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium mb-6">
          🚀 One place to find your perfect team
        </div>

        <h1 className="text-6xl font-extrabold text-slate-900 leading-tight">
          Find Your Perfect
          <br />
          Development Team.
        </h1>

        <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto leading-8">
          Share your ideas, connect with talented developers,
          designers and AI enthusiasts, and build amazing projects
          together.
        </p>

        <div className="mt-10 flex justify-center gap-5 flex-wrap">

          <button
            onClick={() =>
              document
                .getElementById("create-post")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:scale-105 transition"
          >
            Create Collaboration
            <ArrowRight size={20} />
          </button>

          <button
            onClick={() =>
              document
                .getElementById("posts")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-2 border border-slate-300 bg-white hover:bg-slate-100 px-8 py-4 rounded-xl text-lg font-semibold"
          >
            <Compass size={20} />
            Browse Posts
          </button>

        </div>
      </div>
    </section>
  );
}

export default Hero;