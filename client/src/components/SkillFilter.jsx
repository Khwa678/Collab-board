/**
 * Renders the unique set of skill tags across all posts as clickable
 * pills. Clicking a pill filters the list; clicking it again (or
 * "All") clears the filter. Deriving the tag list from `allSkills`
 * (computed in App.jsx from the current posts) means this component
 * never goes stale — new skills automatically appear as posts are added.
 */
const SkillFilter = ({ allSkills, activeSkill, onSelect }) => {
  if (allSkills.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 items-center">
      <span className="text-sm font-medium text-slate-500 mr-1">Filter:</span>

      <button
        onClick={() => onSelect(null)}
        className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
          activeSkill === null
            ? "bg-indigo-600 text-white"
            : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300"
        }`}
      >
        All
      </button>

      {allSkills.map((skill) => (
        <button
          key={skill}
          onClick={() => onSelect(skill === activeSkill ? null : skill)}
          className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
            activeSkill === skill
              ? "bg-indigo-600 text-white"
              : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300"
          }`}
        >
          {skill}
        </button>
      ))}
    </div>
  );
};

export default SkillFilter;
