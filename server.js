import express from 'express'

import env from './backend/configs/EnvConfig'

const app = express()

app.get("/" , (req,res) => {
  res.status(200).send("testing")
})

app.listen(env.PORT, () => {
  console.log(`running on http://localhost:${env.PORT}`)
})