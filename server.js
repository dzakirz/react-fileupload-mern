import express from 'express'

const app = express()

app.get("/" , (req,res) => {
  res.status(200).send("testing")
})

app.listen(5000, () => {
  console.log("running on http://localhost:5000")
})