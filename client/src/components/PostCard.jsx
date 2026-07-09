import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);


const PostCard = ({ post, onDelete }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col gap-3 border border-slate-100">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-800 leading-snug">
            {post.title}
          </h3>
          <p className="text-sm text-slate-500">
            by <span className="font-medium text-slate-600">{post.name}</span>
          </p>
        </div>

        <button
          onClick={() => onDelete(post._id)}
          aria-label="Delete post"
          className="shrink-0 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full p-2 transition-colors"
        >
          🗑️
        </button>
      </div>

      <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap">
        {post.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-1">
        {post.skills.map((skill) => (
          <span
            key={skill}
            className="text-xs font-medium bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      <p className="text-xs text-slate-400 mt-1">
        {dayjs(post.createdAt).fromNow()}
      </p>
    </div>
  );
};

export default PostCard;
