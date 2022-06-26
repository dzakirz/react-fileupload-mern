import 'dotenv/config'

class Env {
  constructor(){
    this.PORT = process.env.PORT
  }
}

const env = new Env()

export default env