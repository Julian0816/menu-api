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

    const {name, price, description, imagen} = req.body;
    try {
    
        const id = uuidv4();

        const item = await ItemInstance.findOne({where: {name}});
       
        if(item) {
            return res.status(400).json({ok: false, msg: 'Item already exists'});
        } else {
            const newItem = await ItemInstance.create({id, name, price, description, imagen});
            return res.status(201).json({ok: true, newItem});
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({msg: 'Error in getMenu'});
    }
}

module.exports = { getMenu, addItem }