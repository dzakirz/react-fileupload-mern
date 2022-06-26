import { Sequelize } from 'sequelize'
import database from '../configs/DatabaseConfig.js'

const { DataTypes } = Sequelize

const ProductSchema = database.define("product", {
  name: DataTypes.STRING,
  image: DataTypes.STRING,
  url: DataTypes.STRING
}, {
  freezeTableName: true
})

export default ProductSchema

(async()=>{
  await database.sync()
})()