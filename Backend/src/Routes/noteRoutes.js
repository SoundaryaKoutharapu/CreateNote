import express, { json } from "express"
import {getAllRoutes, createNote, updateNote, deleteNote, getNoteById} from '../controllers/noteControllers.js'
const router = express.Router();


router.get('/', getAllRoutes)
router.get('/:id', getNoteById);
router.post('/', createNote)
router.put('/:id', updateNote)
router.delete('/:id', deleteNote)


export default router;