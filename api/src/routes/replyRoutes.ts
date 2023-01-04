import express from 'express'
import { delReply, reply, getReplies } from '../controllers/replyController';
const router = express.Router();

router.post('/reply', reply)
router.delete('/del-reply/:id', delReply)
router.get('/replies', getReplies)

export default router