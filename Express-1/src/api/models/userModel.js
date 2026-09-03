const userItems = [
  {
    user_id: 3609,
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@metropolia.fi',
    role: 'user',
    password: 'password'
  },
  {
    user_id: 3610,
    name: 'Jane Smith',
    username: 'janesmith',
    email: 'jane@metropolia.fi',
    role: 'admin',
    password: 'secretpassword'
  }
];

const getUsersFromModel = () => userItems;

const getUserByIdFromModel = (id) => userItems.find((user) => user.user_id === id);

const addUserToModel = (userData) => {
  const newUser = {
    user_id: userItems.length ? userItems[userItems.length - 1].user_id + 1 : 1000,
    ...userData
  };
  userItems.push(newUser);
  return newUser;
};

export { getUsersFromModel, getUserByIdFromModel, addUserToModel };