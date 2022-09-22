import {  Model, DataTypes } from "sequelize";
import db from '../database/config';





 export interface ItemAttributes {
  id: string;
  name: string;
  description: string;
  price: number;
  imagen: string;
}


export class ItemInstance extends Model<ItemAttributes> { }


ItemInstance.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER
    },
    imagen: {
      type: DataTypes.STRING
    }

  },
  {
    sequelize: db,
    tableName: 'menuItems',
  }
);
