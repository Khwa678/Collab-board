import { useState, useEffect, useMemo } from "react";
import toast, { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import SkillFilter from "./components/SkillFilter";
import Loader from "./components/Loader";

import * as postApi from "./services/api";

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setIsLoading(true);
        setFetchError(null);

        const data = await postApi.fetchPosts();
        setPosts(data);
      } catch (error) {
        setFetchError("Could not load posts. Is the server running?");
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  const allSkills = useMemo(() => {
    const skillSet = new Set();

    posts.forEach((post) => {
      post.skills.forEach((skill) => skillSet.add(skill));
    });

    return Array.from(skillSet).sort();
  }, [posts]);

  const visiblePosts = useMemo(() => {
    if (!activeSkill) return posts;

    return posts.filter((post) =>
      post.skills.includes(activeSkill)
    );
  }, [posts, activeSkill]);

  const handleCreatePost = async (postData) => {
    try {
      setIsSubmitting(true);

      const newPost = await postApi.createPost(postData);

      setPosts((prev) => [newPost, ...prev]);

      toast.success("🎉 Collaboration post created!");

      return true;
    } catch (error) {
      const message =
        error.response?.data?.message || "Failed to create post";

      toast.error(message);

      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeletePost = async (postId) => {
    const confirmed = window.confirm(
      "Delete this collaboration post?"
    );

    if (!confirmed) return;

    try {
      await postApi.deletePost(postId);

      setPosts((prev) =>
        prev.filter((post) => post._id !== postId)
      );

      toast.success("Post deleted");
    } catch (error) {
      toast.error("Failed to delete post");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Toaster position="top-center" />

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Statistics */}
      <Stats posts={posts} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[390px_1fr] gap-8">
          {/* Left Side */}
          <div id="create-post">
            <PostForm
              onSubmit={handleCreatePost}
              isSubmitting={isSubmitting}
            />
          </div>

          {/* Right Side */}
          <section
            id="posts"
            className="flex flex-col gap-6"
          >
            <SkillFilter
              allSkills={allSkills}
              activeSkill={activeSkill}
              onSelect={setActiveSkill}
            />

            {isLoading && <Loader />}

            {!isLoading && fetchError && (
              <div className="rounded-xl bg-red-50 border border-red-200 p-5 text-center text-red-600">
                {fetchError}
              </div>
            )}

            {!isLoading && !fetchError && (
              <PostList
                posts={visiblePosts}
                onDelete={handleDeletePost}
                isFiltered={activeSkill !== null}
                clearFilter={() => setActiveSkill(null)}
              />
            )}
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;