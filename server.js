import express from 'express'
import cors from 'cors'
import fileUpload from 'express-fileupload'

import env from './backend/configs/EnvConfig.js'
import productRoute from './backend/routes/ProductRoute.js'

const app = express()

app.use(cors())

app.use(express.json())

app.use(fileUpload())

app.use("/api/products" , productRoute)

app.listen(env.PORT, () => {
  console.log(`running on http://localhost:${env.PORT}`)
})