import express from "express";

import {
  MessageSearchType,
  createMessage,
  getAllMessages,
  getMessages,
} from "../controllers/message.js";

const router = express.Router();

// creatring a message to save

router.post("/create", createMessage);

router.get("/", getMessages);

// Getting all messsages
router.get("/all", getAllMessages);

// sending all messages while typing it
router.get("/search", MessageSearchType);

export default router;
