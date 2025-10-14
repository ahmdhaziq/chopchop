import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import {  ProductController } from "../controllers/product.controller";

const router = Router();
const userController = new UserController();
const productController = new ProductController();

//users
router.get('/users',userController.listUser);
router.get('/users/:id',userController.getUserByID);
router.post('/registerUser',userController.registerUser);

//products
router.get('/products', productController.listProducts);
router.get('/products/:id',productController.getProductById);
router.post('/createProducts',productController.createProduct);

export default router;