import express from 'express'
import { 
  addProduct, 
  deleteProduct, 
  getProductById, 
  getProducts, 
  updateProduct 
} from '../controllers/ProductController.js'

const router = express.Router()

router.route("/")
  .get(getProducts)
  .get(addProduct)
  
router.route("/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct)

export default router