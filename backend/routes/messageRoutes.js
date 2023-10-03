const express = require("express");
<<<<<<< HEAD
const {
  allMessages,
  sendMessage,
} = require("../controllers/messageControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);
=======
const { protect } = require("../middleware/authMiddleware");
const { sendMessage } = require("../controllers/mesageController");

const router = express.Router();

router.route("/").post(protect, sendMessage);
// router.route("/:chatId:").get(protect, allMessages);
>>>>>>> cfa5c9f (adding send new message API)

module.exports = router;
