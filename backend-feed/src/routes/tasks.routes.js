import { Router } from "express"
import { authRequired } from "../middlewares/validateToken.js"
import { getProducts, getAllProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/tasks.controller.js'
import { validateSchema } from "../middlewares/validator.middleware.js"
import { createProductSchema } from "../schemas/product.schema.js"

const router = Router()

router.get('/products', authRequired, getProducts)

router.get('/', getAllProducts)

router.get('/product/:id', authRequired, getProduct)

router.post('/product', authRequired, validateSchema(createProductSchema), createProduct)

router.delete('/product/:id', authRequired, deleteProduct)

router.put('/product/:id', authRequired, updateProduct)

export default router;