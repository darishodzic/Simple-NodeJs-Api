let users = [];

export const getUsers = (req, res) => {
  console.log(users);
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User ${user.name} added`);
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  console.log(id);
  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

export const deleteUserById = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User ${id} deleted`);
};

export const updateUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);

  const { name, lastName, age } = req.body;

  if (name) {
    user.name = name;
  }
  if (lastName) {
    user.lastName = lastName;
  }
  if (age) {
    user.age = age;
  }

  res.send(`User ${id} updated`);
};
