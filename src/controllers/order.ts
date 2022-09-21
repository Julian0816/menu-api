import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { OrderInstance } from "../models/order";


const getOrders = async (req: Request, res: Response) => {
    try {
        const orders = await OrderInstance.findAll();
        return res.status(201).json(orders);
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'Error in getMenu' });
    }
}

const addOrders = async (req: Request, res: Response) => {

    const { items, total } = req.body;
    try {

        const id = uuidv4();

        const order = await OrderInstance.create({ id, items,total });

        if(order){
            return res.status(201).json({ ok: true, order });
        }else{
            return res.status(400).json({ ok: true, msg:'No fue posible generar la orden intente nuevamente' });

        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'Error in getMenu' });
    }
}


const editOrders = async (req: Request, res: Response) => {
    const { id } = req.params;

    const { items, total } = req.body;
    try {

        const item = await OrderInstance.findOne({ where: { id } });

        if (item) {
            return res.status(400).json({ ok: false, msg: 'Item already exists' });
        } else {
            const newOrder = await OrderInstance.update({items, total}, {
                where: {
                  id
                },
                returning: true
              })
            return res.status(201).json({ ok: true, newOrder });
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'Error in getMenu' });
    }
}

const deleteOrders = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {

        const item = await OrderInstance.findOne({ where: { id } });

        if (item) {
            return res.status(400).json({ ok: false, msg: 'Item already exists' });
        } else {
            const newItem = await OrderInstance.destroy({
                where: {
                  id
                }
              })
            return res.status(201).json({ ok: true, msg:'se ha eliminado correcatamente su orden' });
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: 'Error in getMenu' });
    }
}

module.exports = { getOrders, addOrders, editOrders, deleteOrders }