import express, { json } from "express"
import {getAllRoutes, createNote, updateNote, deleteNote} from '../controllers/noteControllers'
const router = express.Router();


router.get('/', getAllRoutes)
router.post('/', createNote)
router.put('/:id', updateNote)
router.delete("/:id", deleteNote)


export default router;