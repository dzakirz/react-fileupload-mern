import path from 'path'
import { ProductSchema } from '../models/ProductModel.js'

export const getProducts = async(req,res) => {
  try {
    const products = await ProductSchema.findAll()
    res.status(200).json(products)
  } catch (error) {
    console.log(error.message)
  }
}

export const getProductById = async(req,res) => {
  try {
    const product = await ProductSchema.findOne({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(product)
  } catch (error) {
    console.log(error.message)
  }
}
export const addProduct = async(req,res) => {
  if(req.files === null){
    return res.status(400).json({msg:"please upload image"})
  }
  const name = req.body.name
  const file = req.files.file
  const fileSize = file.data.length
  const ext = path.extname(file.name)
  const fileName = file.md5 + ext
  const url = `${req.protocol}//${req.get("host")}/images/${fileName}`

  const allowedType = [".png","jpg","jpeg"]
  if(!allowedType.includes(ext.toLowerCase())){
    return res.status(422).json({msg:"invalid image"})
  }
  if(fileSize > 5000000){
    return res.status(422).json({ msg: "image most be less than 5MB" })
  }

  file.mv(`../public/images/${fileName}`, async(err) => {
    if(err) return res.status(500).json({msg: err.message})
    try {
      await ProductSchema.create({name: name, image: fileName, url: url})
      res.status(200).json({msg:"product created"})
    } catch (error) {
      console.log(error.message)
    }
  })
}
export const updateProduct = async(req,res) => {

}
export const deleteProduct = async(req,res) => {

}