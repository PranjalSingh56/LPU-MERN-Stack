// let users = [];

// // export const getAll = () => users;
// export const getAll = (query = {}) => {
//     let filteredUsers = users;
//     if (query.isActive !== undefined) {
//         const searchStatus = query.isActive === "true";
//         filteredUsers = filteredUsers.filter(u => u.isActive === searchStatus);
//     }
//     return filteredUsers;
// };

// export const create = (data) => {
//   const user = {
//     id: Date.now().toString(),
//     ...data,
//   };
//   users.push(user);
//   return user;
// };

// export const update = (id, data) => {
//   const index = users.findIndex((u) => u.id === id);
//   if (index === -1) throw new Error("User not found");
  
//   users[index] = { ...users[index], ...data };
//   return users[index];
// };

// export const remove = (id) => {
//   users = users.filter((u) => u.id !== id);
// };

import User from "../models/user.model.js";
export const getAll = async ()=> await User.find();
export const create = async(data) => await User.create(data);
export const update = async(id,data) => User.findByIdAndUpdate(id,data,{new:true});
export const remove = async(id)=> await User.findByIdAndDelete(id);