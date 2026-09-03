import {
  getUsersFromModel,
  getUserByIdFromModel,
  addUserToModel
} from '../models/userModel.js';

const getUsers = (req, res) => {
  res.json(getUsersFromModel());
};

const getUserById = (req, res) => {
  const id = Number(req.params.id);
  const user = getUserByIdFromModel(id);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  res.json(user);
};

const createUser = (req, res) => {
  const { name, username, email, role, password } = req.body;
  const newUser = addUserToModel({ name, username, email, role, password });
  res.status(201).json(newUser);
};

const updateUser = (req, res) => {
  res.json({ message: 'User item updated.' });
};

const deleteUser = (req, res) => {
  res.json({ message: 'User item deleted.' });
};

export { getUsers, getUserById, createUser, updateUser, deleteUser };