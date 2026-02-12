const router = require("express").Router();
const ctrl = require("../controllers/artifact.controller")
const auth = require("../middlewares/auth.middleware")


router.post("/create",auth,ctrl.createArtifacts);
router.get("/get",auth,ctrl.getArtifacts);


router.post("/:artifactId/like", auth, ctrl.likeArtifact);
router.delete("/:artifactId/unlike", auth, ctrl.unlikeArtifact);

router.post("/:artifactId/comment", auth, ctrl.addComment);
router.get("/:artifactId/comments", ctrl.getComments);

module.exports = router;