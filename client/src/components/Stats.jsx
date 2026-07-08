import { FileText, Users, Tags } from "lucide-react";

function Stats({ posts }) {

  const totalPosts = posts.length;

  const uniqueSkills = new Set(
    posts.flatMap((post) => post.skills)
  ).size;

  const uniqueBuilders = new Set(
    posts.map((post) => post.name)
  ).size;

  const stats = [
    {
      title: "Total Posts",
      value: totalPosts,
      icon: FileText,
    },
    {
      title: "Unique Skills",
      value: uniqueSkills,
      icon: Tags,
    },
    {
      title: "Builders",
      value: uniqueBuilders,
      icon: Users,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 -mt-8 mb-10">
      <div className="grid md:grid-cols-3 gap-6">

        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-md hover:shadow-xl transition hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Icon className="text-blue-600" size={28} />
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-slate-900">
                    {item.value}
                  </h2>

                  <p className="text-slate-500">
                    {item.title}
                  </p>
                </div>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}

export default Stats;