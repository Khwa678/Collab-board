import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

/**
 * Fetches all posts, optionally filtered by a skill tag.
 * Passing skill = null/undefined returns every post.
 */
export const fetchPosts = async (skill) => {
  const response = await api.get("/posts", {
    params: skill ? { skill } : {},
  });
  return response.data;
};

/**
 * Creates a new post. postData shape: { name, title, description, skills }
 */
export const createPost = async (postData) => {
  const response = await api.post("/posts", postData);
  return response.data;
};

/**
 * Deletes a post by its MongoDB _id.
 */
export const deletePost = async (postId) => {
  const response = await api.delete(`/posts/${postId}`);
  return response.data;
};
