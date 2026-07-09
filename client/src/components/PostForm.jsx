import { useState } from "react";

const PostForm = ({ onSubmit, isSubmitting }) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [errors, setErrors] = useState({});

  const addSkill = () => {
    const trimmed = skillInput.trim();
    if (!trimmed) return;

    // Prevent duplicate tags (case-insensitive)
    const alreadyExists = skills.some(
      (skill) => skill.toLowerCase() === trimmed.toLowerCase()
    );

    if (!alreadyExists) {
      setSkills([...skills, trimmed]);
    }
    setSkillInput("");
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleSkillKeyDown = (e) => {
    // Enter or comma both commit the current tag — matches common UX conventions
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addSkill();
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!title.trim()) newErrors.title = "Title is required";
    if (!description.trim()) newErrors.description = "Description is required";
    if (skills.length === 0) newErrors.skills = "Add at least one skill tag";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setName("");
    setTitle("");
    setDescription("");
    setSkills([]);
    setSkillInput("");
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const success = await onSubmit({ name, title, description, skills });
    if (success) resetForm();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 sm:p-6 flex flex-col gap-4"
    >
      <h2 className="text-lg font-semibold text-slate-800">Post a Collaboration</h2>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">
          Your Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Priya Sharma"
          className={`w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 ${
            errors.name ? "border-red-300" : "border-slate-200"
          }`}
        />
        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">
          Project Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Looking for a frontend dev for a fintech dashboard"
          className={`w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 ${
            errors.title ? "border-red-300" : "border-slate-200"
          }`}
        />
        {errors.title && <p className="text-xs text-red-500 mt-1">{errors.title}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the project and what kind of collaborator you're looking for..."
          rows={4}
          className={`w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 resize-none ${
            errors.description ? "border-red-300" : "border-slate-200"
          }`}
        />
        {errors.description && (
          <p className="text-xs text-red-500 mt-1">{errors.description}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1">
          Skill Tags
        </label>
        <div
          className={`w-full rounded-lg border px-3 py-2 flex flex-wrap gap-2 items-center focus-within:ring-2 focus-within:ring-indigo-500 ${
            errors.skills ? "border-red-300" : "border-slate-200"
          }`}
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="flex items-center gap-1 text-xs font-medium bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full"
            >
              {skill}
              <button
                type="button"
                onClick={() => removeSkill(skill)}
                aria-label={`Remove ${skill}`}
                className="text-indigo-400 hover:text-indigo-700"
              >
                ×
              </button>
            </span>
          ))}
          <input
            type="text"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            onKeyDown={handleSkillKeyDown}
            onBlur={addSkill}
            placeholder={skills.length === 0 ? "Type a skill and press Enter" : ""}
            className="flex-1 min-w-[120px] outline-none text-sm py-1"
          />
        </div>
        {errors.skills && <p className="text-xs text-red-500 mt-1">{errors.skills}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-1 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white font-medium text-sm rounded-lg px-4 py-2.5 transition-colors"
      >
        {isSubmitting ? "Posting..." : "Post Collaboration"}
      </button>
    </form>
  );
};

export default PostForm;
