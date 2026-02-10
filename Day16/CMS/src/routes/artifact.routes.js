const router = require("express").Router();
const ctrl = require("../controllers/artifact.controller")
//const auth = require("../controllers/auth.controller");
const auth = require("../middlewares/auth.middleware")

router.post("/create",auth,ctrl.createArtifacts);
router.get("/get",auth,ctrl.getArtifacts);

module.exports = router;