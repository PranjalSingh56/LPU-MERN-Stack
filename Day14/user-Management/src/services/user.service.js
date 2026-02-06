let users = [];

// export const getAll = () => users;
export const getAll = (query = {}) => {
    let filteredUsers = users;
    if (query.isActive !== undefined) {
        const searchStatus = query.isActive === "true";
        filteredUsers = filteredUsers.filter(u => u.isActive === searchStatus);
    }
    return filteredUsers;
};

export const create = (data) => {
  const user = {
    id: Date.now().toString(),
    ...data,
  };
  users.push(user);
  return user;
};

export const update = (id, data) => {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) throw new Error("User not found");
  
  users[index] = { ...users[index], ...data };
  return users[index];
};

export const remove = (id) => {
  users = users.filter((u) => u.id !== id);
};