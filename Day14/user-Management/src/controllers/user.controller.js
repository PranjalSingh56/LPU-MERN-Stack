import * as userService from "../services/user.service.js";
export const getUsers = (req,res)=>{
    const users = userService.getAll(req.query);
    res.json(users);

}

export const createUser = (req,res)=>{
    const user = userService.create(req.body);
    res.status(201).json(user);

}
export const updateUser = (req,res)=>{
    const user = userService.update(req.params.id, req.body);
    res.json(user);

}
export const deleteUser = (req,res)=>{
    const user = userService.update(req.params.id);
    res.status(204).send();

}