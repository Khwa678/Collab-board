import PostCard from "./PostCard";
import EmptyState from "./EmptyState";

/**
 * Renders the list of collaboration posts.
 * If no posts are available, shows a friendly empty state.
 */
const PostList = ({
  posts,
  onDelete,
  isFiltered,
  clearFilter,
}) => {
  if (posts.length === 0) {
    return (
      <EmptyState
        isFiltered={isFiltered}
        clearFilter={clearFilter}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard
          key={post._id}
          post={post}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default PostList;