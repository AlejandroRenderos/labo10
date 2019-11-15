var express = require("express");
var router = express.Router();
var userController = require("../controllers/userController");
/* GET users listing. */
router.get("/", userController.getAll);

router.get("/:id", userController.getByid);
router.post("/", userController.createUser);

router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
