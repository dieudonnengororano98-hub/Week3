import {
  getCatsFromModel,
  getCatByIdFromModel,
  addCatToModel
} from '../models/catModel.js';

const getCats = (req, res) => {
  res.json(getCatsFromModel());
};

const getCatById = (req, res) => {
  const id = Number(req.params.id);
  const cat = getCatByIdFromModel(id);

  if (!cat) {
    return res.status(404).json({ message: 'Cat not found' });
  }

  res.json(cat);
};

const createCat = (req, res) => {
  const { name, weight } = req.body;
  const newCat = addCatToModel({ name, weight });
  res.status(201).json(newCat);
};

const updateCat = (req, res) => {
  res.json({ message: 'Cat item updated.' });
};

const deleteCat = (req, res) => {
  res.json({ message: 'Cat item deleted.' });
};

export { getCats, getCatById, createCat, updateCat, deleteCat };