import {addDocs, deleteDocs, getDocs } from '../controllers/docs.js'

import express  from "express";
const router = express.Router()
router.post('/', addDocs)
router.get('/:id', getDocs)
router.delete('/:id', deleteDocs)



export default router
