const express = require("express");
const cors = require("cors");
const router = express.Router();
const PostsSchema = require("../models/Post");

router.get("/", async (req, res) => {
  try {
    const posts = await PostsSchema.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

router.post("/", async (req, res) => {
  const post = new PostsSchema({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

// get specific post
router.get("/:postId", async (req, res) => {
  try {
    const post = await PostsSchema.findById(req.params.postId);
    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
});

// Assuming you have defined PostsSchema somewhere in your code

// delete a specific post
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await PostsSchema.deleteOne({ _id: req.params.postId });
    res.json(removedPost);
  } catch (error) {
    res.json(error);
    console.log("Error message:", error);
  }
});

// update a post
// Assuming you have defined PostsSchema somewhere in your code

// update a specific post
router.patch("/:postId", async (req, res) => {
  try {
    const updatePost = await PostsSchema.updateOne(
      { _id: req.params.postId },
      { $set: req.body }
    );
    res.json(updatePost);
  } catch (error) {
    res.json(error);
    console.log("Error message:", error);
  }
});

module.exports = router;
