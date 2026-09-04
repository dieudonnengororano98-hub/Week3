import express from 'express';
import multer from "multer";

import {
  getCats,
  getCatById,
  createCat,
  updateCat,
  deleteCat
} from '../controllers/catController.js';

const catRouter = express.Router();
const upload = multer({dest: "uploads/"});

catRouter.route('/')
  .get(getCats)
  .post(upload.single("cat"), createCat);

catRouter.route('/:id')
  .get(getCatById)
  .put(updateCat)
  .delete(deleteCat);

export default catRouter;

