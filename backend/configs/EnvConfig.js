import 'dotenv/config'

class Env {
  constructor(){
    this.PORT = process.env.PORT
    this.DATABASE = process.env.DATABASE
    this.USER = process.env.USER
    this.PASSWORD = process.env.PASSWORD
    this.HOST = process.env.HOST
    this.DIALECT = process.env.DIALECT
  }
}

const env = new Env()

export default env