import Post from "../models/Post.js";

/**
 * GET /api/posts
 * Returns all posts, newest first. Optionally filtered by a single
 * skill tag via ?skill=React query param.
 */
export const getPosts = async (req, res) => {
  try {
    const { skill } = req.query;
    const filter = skill ? { skills: skill } : {};

    const posts = await Post.find(filter).sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch posts", error: error.message });
  }
};

/**
 * POST /api/posts
 * Creates a new collaboration post. Mongoose validation runs
 * automatically on .create() and throws a ValidationError if
 * required fields are missing or malformed.
 */
export const createPost = async (req, res) => {
  try {
    const { name, title, description, skills } = req.body;

    const post = await Post.create({ name, title, description, skills });
    res.status(201).json(post);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: "Failed to create post", error: error.message });
  }
};

/**
 * DELETE /api/posts/:id
 * Removes a post by its MongoDB _id.
 */
export const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete post", error: error.message });
  }
};
