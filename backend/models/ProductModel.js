import { Sequelize, DataTypes } from 'sequelize'
import database from '../configs/DatabaseConfig.js'

const ProductSchema = database.define("Product", {
  name: DataTypes.STRING,
  image: DataTypes.STRING,
  url: DataTypes.STRING
}, {
  freezeTableName: true
})

export { ProductSchema }

(async()=>{
  await database.sync()
})()