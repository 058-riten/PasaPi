import express from "express"
import { verifyToken } from "../middleware/auth.js"
import { addRemoveFriend, getUser, getUserFriends } from "../controllers/userController.js"

const router = express.Router()

router.get('/:id', verifyToken, getUser)
router.get('/:id', verifyToken, getUserFriends)
router.patch('/:id/friendId', verifyToken, addRemoveFriend)

export default router