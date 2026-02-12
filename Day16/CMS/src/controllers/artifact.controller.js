const artifactModel = require("../models/artifact.model");
const Artifact = require("../models/artifact.model");
const Like= require("../models/like.model");
const Comment = require("../models/comment.model")

//create artifacts
exports.createArtifacts = async (req, res) => {
    try {
        const artifact = await Artifact.create({
            ...req.body,
            createdBy: req.user.id
        });

        res.status(201).json({
            message: "Artifact created successfully",
            artifact
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to create artifact",
            error: error.message
        });
    }
};

//get Artifacts
exports.getArtifacts = async (req, res) => {
    try {
        const artifacts = await Artifact
            .find()
            .populate("createdBy", "email")
            .sort({ createdAt: -1 });

        res.status(200).json({
            count: artifacts.length,
            artifacts
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch artifacts",
            error: error.message
        });
    }
};

//like Artifacts
exports.likeArtifact = async (req, res) => {
  try {
    const { artifactId } = req.params;

    const like = await Like.create({
      artifactId,
      userId: req.user.id
    });

    await Artifact.findByIdAndUpdate(artifactId, {
      $inc: { likesCount: 1 }
    });

    res.status(201).json({
      success: true,
      like,
      message: "Artifact liked"
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Already liked"
      });
    }
    res.status(500).json({ success: false, message: error.message });
  }
};


// Unlike Artifact
exports.unlikeArtifact = async (req, res) => {
  try {
    const { artifactId } = req.params;

    const deleted = await Like.findOneAndDelete({
      artifactId,
      userId: req.user.id
    });

    if (!deleted) {
      return res.status(400).json({
        success: false,
        message: "Like not found"
      });
    }

    await Artifact.findByIdAndUpdate(artifactId, {
      $inc: { likesCount: -1 }
    });

    res.status(200).json({
      success: true,
      message: "Artifact unliked"
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// Add Comment in artifact
exports.addComment = async (req, res) => {
  try {
    const { text } = req.body;
    const { artifactId } = req.params;

    const comment = await Comment.create({
      text,
      artifactId,
      userId: req.user.id
    });

    res.status(201).json({
      success: true,
      comment
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// Get Comments of an Artifact
exports.getComments = async (req, res) => {
  try {
    const { artifactId } = req.params;

    const comments = await Comment.find({ artifactId })
      .populate("userId", "name")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      comments
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};