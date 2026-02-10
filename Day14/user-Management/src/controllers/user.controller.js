import { raw } from "express";
import * as userService from "../services/user.service.js";
// export const getUsers = (req,res)=>{
//     const users = userService.getAll(req.query);
//     res.json(users);

// }

// export const createUser = (req,res)=>{
//     const user = userService.create(req.body);
//     res.status(201).json(user);

// }
// export const updateUser = (req,res)=>{
//     const user = userService.update(req.params.id, req.body);
//     res.json(user);

// }
// export const deleteUser = (req,res)=>{
//     const user = userService.update(req.params.id);
//     res.status(204).send();

// }

export const getUsers = async (req, res)=>{
    if (typeof raw ==="String"){
        if (raw.toLowerCase()=== "true") parsed = true;
        if (raw.toLowerCase()=== "false") parsed = false;

    }
    const users = await userService.getAll({isActive:parsed});
    res.json(users);
};

export const createUser = async (req,res) =>{
    const user = await userService.create(req.body);
    res.status(201),json(user);
};

export const updateUser = async(req,res) =>{
    const user = await  userService.update(req.params.id, req.body);
    res.json(user);
}

export const deleteUser = async (req,res)=>{
    await userService.remove(req.params.id);
    res.status(204).send();
}