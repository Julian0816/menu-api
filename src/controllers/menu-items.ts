import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { ItemInstance } from "../models/item";

const getMenu = async (req: Request, res: Response) => {
    try{
        const menuItems = await ItemInstance.findAll();
        return res.status(201).json(menuItems);
    } catch(error) {
        console.log(error)
        return res.status(500).json({msg: 'Error in getMenu'});
    }
}

const addItem = async (req: Request, res: Response) => {
    const {name, price, description, image} = req.body;
    try {
        const item = await ItemInstance.findOne({where: {name}});
        console.log(item);
        if(item) {
            return res.status(400).json({ok: false, msg: 'Item already exists'});
        } else {
            const newItem = await ItemInstance.create({name, price, description, image});
            return res.status(201).json({ok: true, msg: `Item has been added ${newItem.name} with Id ${newItem.id}`});
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: 'Error in getMenu'});
    }
}

module.exports = { getMenu, addItem }