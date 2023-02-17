import {addMedicine, deleteMedicine, getMedicine } from '../controllers/medicine.js'

import express  from "express";
const router = express.Router()
router.post('/', addMedicine)
router.get('/:id', getMedicine)
router.delete('/:id', deleteMedicine)



export default router
