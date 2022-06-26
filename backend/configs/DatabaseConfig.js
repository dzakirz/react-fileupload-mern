import { Sequelize } from 'sequelize'

import env from './EnvConfig.js'

const database = new Sequelize(env.DATABASE, env.USER, env.PASSWORD, {
  host: env.HOST,
  dialect: env.DIALECT
})

export default database