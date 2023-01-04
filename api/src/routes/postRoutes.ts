import express from'express';
import { createPosts, delPosts, getPost, getPosts } from '../controllers/postController';
const router = express.Router();

router.post('/create-post', createPosts)
router.get('/posts', getPosts)
router.get('/post/:id', getPost)
router.delete('/del-post/:id', delPosts)

export default router