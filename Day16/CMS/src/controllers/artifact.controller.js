const Artifact = require("../models/artifact.model");
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