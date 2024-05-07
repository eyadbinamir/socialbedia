import express from "express";
import {
  getPost,
  edit,
  deletePost,
  likeToggle,
  toggleComments,
} from "../controllers/post.js";
import { verifyToken } from "../middleware/auth.js";
import { verifyId } from "../middleware/check.js";
import { getPostData } from "../middleware/post.js";
const router = express.Router();
//root path: /post

/*READ*/
router.get("/", verifyId, getPostData, getPost);

/*UPDATE*/
router.patch("/like", verifyId, verifyToken, getPostData, likeToggle);

router.patch(
  "/toggle_comments",
  verifyId,
  verifyToken,
  getPostData,
  toggleComments
);

router.patch("/edit", verifyId, verifyToken, getPostData, edit);

/*DELETE*/
router.delete("/delete", verifyId, verifyToken, getPostData, deletePost);

export default router;
