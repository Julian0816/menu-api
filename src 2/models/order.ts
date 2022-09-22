import {  Model, DataTypes, Sequelize } from "sequelize";
import db from '../database/config';
import { ItemAttributes } from './item';


interface OrderAttributes {
  id: string;
  items: ItemAttributes[];
  total: number;
}


export class OrderInstance extends Model<OrderAttributes> { }


OrderInstance.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    items: {
      type: Sequelize.ARRAY(DataTypes.JSONB),
      defaultValue: [],
    },
    total: {
        type: DataTypes.INTEGER
      },

  },
  {
    sequelize: db,
    tableName: 'orders',
  }
);
